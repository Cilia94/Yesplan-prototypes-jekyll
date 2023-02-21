echo "Copy images from Yesplan repo to prototypes"
# cp -rv ./Yesplan/resources/images ./prototypes

source_dir="./Yesplan/resources/images"
dest_dir="./prototypes/images"

rsync -av "$source_dir/" "$dest_dir/"