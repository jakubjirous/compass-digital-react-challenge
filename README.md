# Compass Digital - Frontend Take-Home Assessment 

> Note: preview the instructions by right clicking on `README.md` and choose `Open  Preview` 

Hello, here is a fairly simple technical test to assess your skills as a frontend developer with the technologies you might use at Compass Digital.


You are being asked to render an single page in this sandbox using the following technology stack:

- TypeScript (already installed) 
- React (already installed)
- React Router (v6)
- MUI / Material UI (latest version is recommended)
- [MUI X Charts](https://mui.com/x/react-charts/)
- React Testing Library (already installed)

You will need to display temperature details on a bar chart using the mock API inside the `api` folder. User will be displayed a full dataset chart like the one below:

<br>
<div align="center">
  <img width="250" height="150" src="public/example.png">
</div>
<br>

Any architecture or styling decision is up to you but you should adhere to frontend best practises. You will be judged on the quality of your code, the proper functioning of the application, and any additional details you wish to add.

Your submission should include unit tests that you can run using the `npm run test` task command.

It should not take more than 2 hours to complete.

If you wish, you can complete optional bonuses / stretch goals from the following list:

- Use [data router](https://reactrouter.com/en/main/routers/picking-a-router) to prefetch your data
- Use [TanStack Query](https://tanstack.com/query/latest) for async state management

<br>

> How to submit?
> - Sign in and fork this sandbox by clicking on the top right `Fork` button 
> - Edit the code to make changes 
> - When you're ready to submit your code, copy and paste the link using the top right `Share` button

<br>

Good luck!

---

## Resources

- [Codesandbox](https://codesandbox.io/p/github/jakubjirous/compass-digital-react-challenge/draft/elastic-bush?workspaceId=59377528-2708-42fb-9489-35c7caa15968&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clwy8fm3j00063b8fwgh2iks4%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clwy8fm3j00023b8frl1ve7yp%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clwy8fm3j00043b8fcv1pv6wu%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clwy8fm3j00053b8fyw3wdwyz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clwy8fm3j00023b8frl1ve7yp%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clwy8fm3j00013b8fhr55pjdg%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%257D%255D%252C%2522id%2522%253A%2522clwy8fm3j00023b8frl1ve7yp%2522%252C%2522activeTabId%2522%253A%2522clwy8fm3j00013b8fhr55pjdg%2522%257D%252C%2522clwy8fm3j00053b8fyw3wdwyz%2522%253A%257B%2522id%2522%253A%2522clwy8fm3j00053b8fyw3wdwyz%2522%252C%2522activeTabId%2522%253A%2522clwyb5bei00983b8fgw0e6yg7%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522CHANGELOG%2522%252C%2522id%2522%253A%2522clwyb5bei00983b8fgw0e6yg7%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clwy8fm3j00043b8fcv1pv6wu%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clwy8fm3j00033b8fha39rclp%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clwq0os7s000rdjjzagf29twb%2522%257D%255D%252C%2522id%2522%253A%2522clwy8fm3j00043b8fcv1pv6wu%2522%252C%2522activeTabId%2522%253A%2522clwy8fm3j00033b8fha39rclp%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)
- [GitHub Repo](https://github.com/jakubjirous/compass-digital-react-challenge)
- [Vercel Deploy](https://compass-digital-react-challenge.vercel.app/)
