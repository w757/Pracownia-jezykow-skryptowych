#!/bin/bash

source /home/kali/Desktop/skrypty/zadanie1/functions.sh

player="O"

trap ctrl_c INT


while true; do

    echo "Game mode: "
    echo "1. user vs computer"
    echo "2. user vs user"
    read game_mode


    if [ "$game_mode" != "1" ] && [ "$game_mode" != "2" ]; then
        echo "Bad value, try again"  
    else 
        break
    fi

done


while true; do
    echo "Do you want to use an initialization file?  (Y/N)"
    read use_init_file


    if [ "$use_init_file" != "Y" ] && [ "$use_init_file" != "N" ]; then
        echo "Bad value, try again"  

    elif [ "$use_init_file" == "Y" ]; then
        read_file
        break

    else 
        board=(" " " " " " " " " " " " " " " " " ")
        break
    fi

done

while true; do
    
    clear
    draw_board
    
    if [ "$game_mode" == "1" ]; then    #user vs computer
        if [ "$player" == "X" ]; then 
            
            computer_move
            echo "comp"
        else                            # user vs user 
            user_move
        fi
    else
        user_move
    fi
        
    
    if check_win "$player"; then
        clear
        draw_board
        echo "Player $player won!"
        echo "THE END"
        break
    fi

    if check_draw; then
        clear
        draw_board
        echo "DRAW"
        break
    fi

    if [ "$player" == "X" ]; then
        player="O"
    else
        player="X"                
    fi

done
