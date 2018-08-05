dir=$(pwd)
str=${dir:17}
echo $str

git remote add origin git@github.com:minorhash/$str.git
git push -u origin master
