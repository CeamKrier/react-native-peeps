#!/bin/sh

case $1 in
    start) emulator.exe -avd $(emulator.exe -list-avds | sed -n '1p') ;;
    list) emulator.exe -list-avds ;;
esac