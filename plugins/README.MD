<img src="https://user-images.githubusercontent.com/66573599/146654766-41c1fdd8-9350-415e-87b2-afbfc17da12a.png" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" align="right" width="70" height="100" />

#### [🔗 Discord Link](https://stealer.re/verify) - [📖 Terms](https://github.com/Stanley-GF/PirateStealer#terms) - [🔨 Builder](https://stealer.re/) - [💎 Premium](https://stealer.re/verify) - [💡 Features](https://github.com/Stanley-GF/PirateStealer#features)
# How to properly create a plugin

## Beginning 
Create a folder with the name of your plugin. In this folder, create a file named info.json

![image](https://user-images.githubusercontent.com/66573599/146775438-070bc792-e820-474b-93ff-767ea01ccfc7.png)

And write in this file your configuration, example:
```json
{
	"github":"Stanley-GF", 
	"description":"Funny plugin allowing you to rickroll your victims", 
	"title":"Rickroll", 
  "features":["Show Rickroll Popup", "Open Never Gonna Give You Up on click", "Open Never Gonna Give you up in browser x times."],
	"discord_id":"9999999999999", 
	"telegram":"stanleygf"
}
```
Required fields are: `title`,`description`
Note: If you do not put your github name in `github`, owner name will be `Anonymous`

### ℹ️ Not required
Create a file named settings.json, here, you'll have to put your settings, example
```json
{

  "Number Of Rickroll":"%NOR%"
  
}
```
`Number Of Rickroll` is the parameter name and `%NOR%` will be the string replaced. Please use the same name in injection & in injector. 

## Injection ([/src/Injection](https://github.com/Stanley-GF/PirateStealer/tree/main/src/injection))
### :warning: *Injection is the part of the grabber that will be injected in the discord client*
Create a file named injection.js

![image](https://user-images.githubusercontent.com/66573599/146776240-613f791d-334d-4842-85b7-b4fe112e9a82.png)

In this file, put your injection code. then save it. Please note that if the injection code is obfuscated, we'll deny your plugin.

![image](https://user-images.githubusercontent.com/66573599/146776408-fdcffd11-02e1-4122-ba8d-907a606c8292.png)

Save your file in the same directory of the info.json.

## Injector ([/src/Injector](https://github.com/Stanley-GF/PirateStealer/tree/main/src/injector))
### :warning: *injector is the part of the grabber that will inject the code in the discord client*

Still in the same directory, create a file named injector.js and write your code in. Please note that the injection link will be changed by staff.
![image](https://user-images.githubusercontent.com/66573599/146793926-1565ed62-b8f0-40e0-b6c7-59407b91f454.png)

# Publish it
Open an issue / DM me, our system is temporaly down so we'll have to do manually :|
