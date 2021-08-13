# Intro to Version Control | Git and Github

This repo was used for the hands-on-practical session during the "Intro to Version Control | Git and Github" event by [GDSC AE-FUNAI](https://gdsc.community.dev/federal-university-ndufu-alike-ikwo-funai/), [GDSC FULOKOJA](https://gdsc.community.dev/federal-university-lokoja-kogi-state/), [GDSC FUTO](https://gdsc.community.dev/federal-university-of-technology-owerri/), [GDSC MUBS](https://gdsc.community.dev/makerere-university-business-school/), [GDSC Nekede](https://gdsc.community.dev/federal-polytechnic-nekede/) and [GDSC UICT](https://gdsc.community.dev/uganda-institute-of-information-and-communications-technology/).

All attendees who made pull requests to this repo can be found on https://githubevent.web.app

## Attendee Instructions
Having attended the event at https://youtu.be/uf12u9keG10, send your pull request to get your name on the event site at https://githubevent.web.app. Carryout the following instructions, to make your pull request. If you do not have a GitHub account, first create one [here](https://github.com/join).

1. [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) this [repository](https://github.com/gdscaefunai/github-event) by clicking on **Fork** at the top right corner of this page (Be sure you are viewing this README from github.com and as a desktop site).

2. In your fork, Go to the [`attendees.json`](public/attendees.json) file, found in the `public` folder.

3. In the upper right corner of the file view, click ![edit icon](edit-icon.svg) to open the file editor to [edit](https://docs.github.com/en/free-pro-team@latest/github/managing-files-in-a-repository/editing-files-in-your-repository) the `attendees.json` file.

3. Copy the sample attendee from the first opening brace - **{** - (on line 2) to the first closing brace - **}** - (on line 11), without the comma. What you copy should look like the following: 
```
  {
    "name": "Your Name",
    "gdsc": "Your School (Abbreviated)",
    "website": "https://example.com",
    "linkedin": "https://linkedin.com/xx/xxx",
    "facebook": "https://facebook.com/xxx",
    "twitter": "Your Twitter Username",
    "github": "Your Github Username",
    "instagram": "Your Instagram Username"
  }
```

4. Scroll to the end of the `attendees.json` file, add a comma - **,** - immediately after the last closing brace - **}** -, and press the enter key.

5. On the new line, paste the sample you just copied.

6. Edit the values with yours, please verify that they are correct. `name` and `gdsc` are compulsory.  

#### Note:  
If you don't have any of the social media, please delete the sample value for that social media and leave the quotation marks empty.

7. At the bottom of the page, type the following as the title of your commit message with your name instead
```
    YOUR-NAME attended the GDSC Github Event
```

8. Click on the green `Commit changes` button.

9. Visit the following link on a new tab, be sure to use your github username instead (don't delete the three full stops).
```
    https://github.com/gdscaefunai/github-event/compare/main...YOUR-GITHUB-USERNAME:main
```

10. At the top of the page, type the following as the title of your pull request with your name instead
```
    YOUR-NAME attended the GDSC Github Event
```

11. Click on the green `Create pull request` button.

### Hooray!!!
You have just made a pull request, it will be merged later on and your name will reflect on the event site at https://githubevent.web.app
