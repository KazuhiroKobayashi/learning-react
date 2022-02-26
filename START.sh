#!/bin/zsh

echo "Update system components."
export SHELL=/bin/zsh
sudo apt update
sudo apt upgrade

echo "Clean up"
sudo apt clean
sudo rm -rf /var/lib/apt/lists/*

#npx create-react-app my-app --templete typescript