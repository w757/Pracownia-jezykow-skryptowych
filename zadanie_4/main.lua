
local love = require('love')


local board = {} 
local blockSize 
local tetrominoes = { 
    {{1, 1}, {1, 2}, {2, 2}}, -- L
    {{1, 1}, {2, 1}, {2, 2}}, -- J
    {{1, 1}, {1, 2}, {2, 1}, {2, 2}}, -- O
    {{1, 1}, {2, 1}, {3, 1}, {4, 1}} -- I
}
local currentTetromino = nil 
local tetrominoX, tetrominoY = 1, 1 
local timeElapsed = 0 
local dropInterval = 1 
local gameOver = false 


-- Inicjalizacja planszy 
function love.load()
    
    for i = 1, 20 do
        board[i] = {}
        for j = 1, 10 do
            board[i][j] = 0
        end
    end

    local windowWidth, windowHeight = love.graphics.getDimensions()
    blockSize = math.min(windowWidth / 10, windowHeight / 20)

    generateTetromino()
end


function love.update(dt)
    if not gameOver then
        timeElapsed = timeElapsed + dt
        if timeElapsed > dropInterval then

            if canMove(tetrominoX, tetrominoY + 1, currentTetromino) then
                tetrominoY = tetrominoY + 1
            else
                mergeTetromino()
                generateTetromino()
                if not canMove(tetrominoX, tetrominoY, currentTetromino) then
                    gameOver = true
                end
            end
            timeElapsed = 0
        end
    end
end


function love.draw()

    for i = 1, #board do
        for j = 1, #board[i] do
            if board[i][j] ~= 0 then
                love.graphics.rectangle('fill', (j - 1) * blockSize, (i - 1) * blockSize, blockSize, blockSize)
            end
        end
    end

    if not gameOver then
        for _, block in ipairs(currentTetromino) do
            local x, y = block[1], block[2]
            love.graphics.rectangle('fill', (tetrominoX + x - 1) * blockSize, (tetrominoY + y - 1) * blockSize, blockSize, blockSize)
        end
    else
        love.graphics.print('Koniec gry', 0, 0)
    end
end


function love.keypressed(key)

    if not gameOver then
        if key == 'left' then
            if canMove(tetrominoX - 1, tetrominoY, currentTetromino) then
                tetrominoX = tetrominoX - 1
            end
        elseif key == 'right' then
            if canMove(tetrominoX + 1, tetrominoY, currentTetromino) then
                tetrominoX = tetrominoX + 1
            end
        elseif key == 'down' then
            if canMove(tetrominoX, tetrominoY + 1, currentTetromino) then
                tetrominoY = tetrominoY + 1
            end
        elseif key == 'up' then
            local rotated = rotateTetromino(currentTetromino)
            if canMove(tetrominoX, tetrominoY, rotated) then
                currentTetromino = rotated
            end
        end
    end
end

function rotateTetromino(tetromino)
    local newTetromino = {}
    for _, block in ipairs(tetromino) do
        local x, y = block[1], block[2]
        newTetromino[#newTetromino + 1] = {y, -x}
    end
    return newTetromino
end

function generateTetromino()
    currentTetromino = tetrominoes[love.math.random(#tetrominoes)]
    tetrominoX, tetrominoY = 1, 1
end

function canMove(newX, newY, tetromino)
    for _, block in ipairs(tetromino) do
        local x, y = newX + block[1], newY + block[2]
        if x < 1 or x > 10 or y > 20 or board[y] and board[y][x] ~= 0 then
            return false
        end
    end
    return true
end

function mergeTetromino()
    for _, block in ipairs(currentTetromino) do
        local x, y = tetrominoX + block[1], tetrominoY + block[2]
        board[y][x] = 1
    end
end
