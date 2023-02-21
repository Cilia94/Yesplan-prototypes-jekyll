# Before start npm dev (or even before executing webpack?)
echo 'Copy config files from Yesplan repo to Yesplan-Prototypes folder'

# Set the source and destination directories
source_dir="./Yesplan/resources/reactjs-components"
dest_dir="./"

# Use find to search for all invisible files in the source directory (excluding subdirectories)
# that are not named .DS_Store and copy them to the destination directory
find "$source_dir" -maxdepth 1 -type f -name '.*' ! -name '.DS_Store' -exec cp {} "$dest_dir" \;

# Use find to search for all files in the source directory with the extension "config.js"
# that are not named "webpack.*" or "babel.config.js" and copy them to the destination directory
find "$source_dir" -maxdepth 1 -type f -name '*.config.js' ! -name 'webpack.*' ! -name 'babel.config.js' -exec cp {} "$dest_dir" \;
