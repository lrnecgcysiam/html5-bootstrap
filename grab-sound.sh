ffmpeg -i $3 -ss $1  -t $2  -vn -acodec pcm_s16le -ar 44100 -ac 2 output_sound.wav
