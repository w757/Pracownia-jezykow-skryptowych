require 'ruby2d'
require 'ostruct'

set width: 640
set height: 480

class Background
  def initialize(image_path)
    @image = Image.new(
      image_path,
      x: 0,
      y: 0,
      width: Window.width,
      height: Window.height,
      z: -1
    )
  end

  def draw
    @image.draw
  end
end

class Heart
  attr_reader :sprite

  def initialize(x, y, width, height)
    @sprite = Image.new(
      'images/heart.png',
      width: width,
      height: height,
      x: x,
      y: y
    )
  end

  def draw
    @sprite.draw
  end

  def remove
    @sprite.remove
  end
end

class Enemy
  attr_reader :sprite, :collided
  attr_writer :collided  

  def initialize(x, y, width, height, speed)
    @sprite = Image.new(
      'images/enemy.png',
      width: width,
      height: height,
      x: x,
      y: y
    )
    @speed = speed
    @collided = false
  end

  def draw
    @sprite.draw
  end

  def move(delta_time)
    @sprite.x -= @speed * delta_time
    reset_position if @sprite.x + @sprite.width < 0
  end

  def remove
    @sprite.remove
  end

  private

  def reset_position
    @sprite.x = Window.width
  end
end

class Hole
  attr_reader :sprite, :entered
  attr_writer :entered  

  def initialize(x, y, width, height, speed)
    @sprite = Image.new(
      'images/hole.png',
      width: width,
      height: height,
      x: x,
      y: y
    )
    @speed = speed
    @entered = false
  end

  def draw
    @sprite.draw
  end

  def move(delta_time)
    @sprite.x -= @speed * delta_time
    reset_position if @sprite.x + @sprite.width < 0
  end

  def remove
    @sprite.remove
  end

  private

  def reset_position
    @sprite.x = Window.width
    @entered = false  
  end
end

class Coin
  attr_reader :sprite, :points, :collected
  attr_writer :collected  

  def initialize(x, y, width, height, points)
    @sprite = Image.new(
      'images/point.png',
      width: width,
      height: height,
      x: x,
      y: y
    )
    @points = points
    @collected = false
  end

  def draw
    @sprite.draw
  end

  def move(delta_time)
    @sprite.x -= delta_time
    reset_position if @sprite.x + @sprite.width < 0
  end

  def remove
    @sprite.remove
  end

  private

  def reset_position
    @sprite.x = Window.width
    @collected = false  
  end
end

class Mario
  attr_reader :sprite

  def initialize(x, y, width, height)
    @sprite = Image.new(
      'images/heart.png',
      width: width,
      height: height,
      x: x,
      y: y
    )
  end

  def draw
    @sprite.draw
  end
end

background = Background.new('images/background.png')

heart1 = Heart.new(500, 20, 30, 30)
heart2 = Heart.new(550, 20, 30, 30)
heart3 = Heart.new(600, 20, 30, 30)

sprite = Sprite.new(
  'images/mario.png',
  x: 100,
  y: 300,
  clip_width: 70,
  clip_height: 70
)

enemies = []
enemies << Enemy.new(640, 250, 50, 50, 100)
enemies << Enemy.new(800, 350, 50, 50, 100)

holes = []
holes << Hole.new(900, 400, 100, 100, 80)

coins = []
coins << Coin.new(300, 200, 30, 30, 10)
coins << Coin.new(600, 100, 30, 30, 20)

gravity = 3
lives = 3
score = 0

score_text = Text.new(
  "Score: #{score}",
  x: 10,
  y: 10,
  size: 20,
  color: 'white'
)

last_time = Time.now

on :key_held do |event|
  case event.key
  when 'up'
    sprite.y -= 10
  when 'down'
    sprite.y += 5
  when 'left'
    sprite.x -= 5
  when 'right'
    sprite.x += 5
  end
end

on :key_up do
  sprite.stop
end

update do
  current_time = Time.now
  delta_time = current_time - last_time
  last_time = current_time

  sprite.y = sprite.y + gravity * delta_time + 1

  ground_level = 340
  if sprite.y > ground_level
    sprite.y = ground_level
  end

  enemies.each { |enemy| enemy.move(delta_time) }
  holes.each { |hole| hole.move(delta_time) }
  coins.each { |coin| coin.move(delta_time) }

  enemies.each do |enemy|
    if sprite.x < enemy.sprite.x + enemy.sprite.width &&
       sprite.x + sprite.clip_width > enemy.sprite.x &&
       sprite.y < enemy.sprite.y + enemy.sprite.height &&
       sprite.y + sprite.clip_height > enemy.sprite.y

      unless enemy.collided
        enemy.collided = true
        sprite.x = 100  
        sprite.y = 300

        puts 'Kolizja z przeciwnikiem!'
        heart1.remove
        lives -= 1

        if lives <= 0
          puts 'Koniec gry - Brak żyć!'
          close
        end
      end
    else
      enemy.collided = false
    end
  end

  holes.each do |hole|
    if sprite.x < hole.sprite.x + hole.sprite.width &&
       sprite.x + sprite.clip_width > hole.sprite.x &&
       sprite.y < hole.sprite.y + hole.sprite.height &&
       sprite.y + sprite.clip_height > hole.sprite.y

      unless hole.entered
        hole.entered = true
        puts 'Wpadłeś w dziurę!'
        sprite.x = 100  
        sprite.y = 300
        lives -= 1

        if lives <= 0
          puts 'Koniec gry - Brak żyć!'
          close
        end
      end
    else
      hole.entered = false
    end
  end

  coins.each do |coin|
    if sprite.x < coin.sprite.x + coin.sprite.width &&
       sprite.x + sprite.clip_width > coin.sprite.x &&
       sprite.y < coin.sprite.y + coin.sprite.height &&
       sprite.y + sprite.clip_height > coin.sprite.y

      unless coin.collected
        coin.collected = true
        coin.remove
        score += coin.points
        score_text.text = "Score: #{score}"
        puts "Zebrano #{coin.points} punktów! Aktualny wynik: #{score}"
      end
    else
      coin.collected = false
    end
  end
end

show
