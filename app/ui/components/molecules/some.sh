#! /bin/zsh
#
# some.sh
# Copyright (C) 2024 sakakibara <sakakibara@organon>
#
# Distributed under terms of the MIT license.
#


component_name=$1

if [ ! -d "$component_name"  ]; then
  mkdir $component_name
fi

if [ -f "$component_name.tsx" ]; then
  mv $component_name.tsx $component_name/index.tsx
  echo "$component_name.tsx is moved"
fi

if [ -f "$component_name.stories.ts" ]; then
  mv $component_name.stories.ts $component_name/index.stories.ts
  echo "$component_name.stories.ts is moved"
fi
