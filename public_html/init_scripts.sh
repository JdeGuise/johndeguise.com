#!/bin/sh

mkdir ~/scripts

rm -rf ~/scripts/*

cp -r setup_scripts ~/scripts

cd ~/scripts

bash project_setup.sh