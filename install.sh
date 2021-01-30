#!/bin/sh
sudo pacman -S --needed npm python electron
cd backend
python -m venv .venv
source .venv/bin/activate 
pip install -r requirements.txt
deactivate
cd ..
cd frontend
npm install
cd ..
