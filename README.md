## Piyush Portfolio Website

### Steps to `setup`

1. Double-check that the homepage URL in your package.json file matches the actual URL where you want your React application to be hosted.
Make sure it includes the correct username and repository name, as well as the `https://` protocol.
Check the build output:

2. After running `npm run build`, ensure that the build process completes without any errors or warnings.
Look for any error messages related to missing files or assets.
Confirm that the gh-pages branch is created:

3. Visit your GitHub repository's page and click on the "`Branches`" tab.
Verify that there is a branch named gh-pages.
If the branch doesn't exist, try running `npm run deploy` again and check for any error messages in the terminal.
Wait for the deployment to propagate:

4. After successfully deploying your React application to GitHub Pages, it may take some time for the changes to propagate and the site to become accessible.
Wait a few minutes and try accessing the URL again.
Check your application's routing:

5. If your React application uses client-side routing (e.g., React Router), GitHub Pages may have trouble rendering the correct page.

6. Ensure that your routing is set up properly and that you're using BrowserRouter instead of HashRouter.
For example, if you're using React Router, your routes should look like this: `<Route exact path="/" component={Home} />`, instead of `<Route exact path="/#/" component={Home} />`.
Enable GitHub Pages in the repository settings:

7. Go to your GitHub repository's page, click on the "`Settings`" tab, and scroll down to the "`GitHub Pages`" section.
Make sure the source branch is set to `gh-pages` and click on "`Save`" or "`Update`" to apply the changes.
Clear your browser cache:

8. Sometimes, your browser may cache the previous version of your application, leading to a blank page.
Clear your browser's cache or try accessing the GitHub Pages link in an incognito or private browsing window.