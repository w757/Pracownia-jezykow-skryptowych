#!/bin/bash

ctrl_c() {
    echo "(Ctrl+C)"
    output_file="output.txt"
    echo "saving file..."
    echo -n "" > "$output_file"
    for element in "${board[@]}"; do 
        echo -n "$element" >> "$output_file"
    done
    
    exit 1
}

draw_board() {
    
    echo " ${board[0]} | ${board[1]} | ${board[2]} "
    echo "-----------"
    echo " ${board[3]} | ${board[4]} | ${board[5]} "
    echo "-----------"
    echo " ${board[6]} | ${board[7]} | ${board[8]} "
}



read_file() {

    i=0
    file="output.txt"
    
    if [ ! -e "$file" ]; then
        echo "File $file does not exist."
        return 1
    fi

    while IFS= read -n 1 char; do 
        board[$i]="$char"
        ((i++))
    done < "$file"

    return 0

}



check_win() {

#    0   1   2  
# 
# 0  O | 1 | 2 
#   -----------
# 1  3 | 4 | 5 
#   -----------
# 2  6 | 7 | 8 


    for i in 0 3 6; do
        if [ "${board[$i]}" == "$1" ] && [ "${board[$i+1]}" == "$1" ] && [ "${board[$i+2]}" == "$1" ]; then
            return 0
        fi

    done
   
    for i in 0 1 2; do
        if [ "${board[$i]}" == "$1" ] && [ "${board[$i+3]}" == "$1" ] && [ "${board[$i+6]}" == "$1" ]; then
            return 0
        fi

    done



    if [ "${board[6]}" == "$1" ] && [ "${board[4]}" == "$1" ] && [ "${board[2]}" == "$1" ]; then
            return 0
    fi




    if [ "${board[0]}" == "$1" ] && [ "${board[4]}" == "$1" ] && [ "${board[8]}" == "$1" ]; then
            return 0
    fi
    
    return 1

}

computer_move(){


    while true; do
        random_row=$((RANDOM % 3))
        random_col=$((RANDOM % 3))

        position=$((random_col+random_row*3))
        if [ "${board[$position]}" == " " ] || [ "${board[$position]}" == "" ]; then
                board[$position]=$player
                break  
        fi
    done

}


user_move() {

    while true; do

    echo "Player  $player ! "
    echo "Give coordinates: [(0-2) (0-2)]"
    read row col

    if [ "$row" -ge 0 ] && [ "$row" -le 2 ] && [ "$col" -ge 0 ] && [ "$col" -le 2 ]; then
        
        position=$((col+row*3))

        if [ "${board[$position]}" != " " ] && [ "${board[$position]}" != "" ]; then
            echo "Occupied square, try again"
            sleep 1

        else 
            board[$position]=$player
            break
        fi

    else 
        echo "Bad value, try again."
        sleep 1
    fi

    done
}

check_draw() {
    for (( i=0; i<9; i++)) do
        if [ "${board[$i]}" == " " ] || [ "${board[$i]}" == "" ]; then     
            echo "board ${board[$i]}"
            return 1
        fi        
    done
    return 0
}
