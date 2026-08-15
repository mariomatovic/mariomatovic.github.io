# Mario Matovic — GitHub Pages Ready

This folder is the finished website, already built for GitHub Pages. It is **not** the React source code. You do not need Node.js, React, or a terminal to publish it.

## The simple method: GitHub Desktop

1. Install GitHub Desktop from https://desktop.github.com and sign in with the GitHub account that owns `mariomatovic/mariomatovic.github.io`.
2. In GitHub Desktop, select **File → Clone repository**. Choose `mariomatovic/mariomatovic.github.io` and click **Clone**.
3. In GitHub Desktop, click **Show in Explorer** (Windows) or **Show in Finder** (Mac). This opens the repository folder on your computer.
4. Delete every old website file inside that folder. Do **not** delete the hidden `.git` folder if you can see it.
5. Open this `github-pages-ready` folder. Copy everything inside it—including `index.html`, `404.html`, the `assets` folder, and the `media` folder—into the repository folder you opened in step 3.
6. Return to GitHub Desktop. It will show the deleted old files and the new site files. In the bottom-left summary box, write `Replace old website with new portfolio`, then click **Commit to main**.
7. Click **Push origin** at the top of GitHub Desktop.
8. On GitHub, open https://github.com/mariomatovic/mariomatovic.github.io/settings/pages. Under **Build and deployment**, select **Deploy from a branch**. Choose branch `main`, folder `/(root)`, then click **Save**.
9. Wait a few minutes, then open https://mariomatovic.github.io/.

## Important

* Your old static `index.html` has been replaced by the finished built website in this folder. Do not upload the React source project for this simple method.
* The `404.html` file is intentional. It makes the private Team Performance Risk Check link work when opened directly.
* If you need to change text in the future, change the React project first, then create a fresh GitHub Pages package rather than editing the built files directly.
