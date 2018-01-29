#!/bin/bash
find dist -type f -exec curl -u bigbossduck@bigbossduck.com:Colombia2016 --ftp-create-dirs -T {} ftp://ftp.conectanddo.com/{} \;