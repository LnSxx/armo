#!/bin/sh
sudo pacman -Sy
sudo pacman -S --needed npm python electron
cd backend
python -m venv .venv
source .venv/bin/activate 
pip install -r requirements.txt
deactivate
cd ../frontend
npm install
cd ..
