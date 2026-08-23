# Mario Matovic Website — GitHub Pages Replacement Guide

## What this package is

The accompanying `mario-matovic-github-pages.zip` is a ready-to-upload static website package. It includes the compiled website, the Performance Window at `/performance-window`, the supplied CV, and the visual assets required by the site.

> Before replacing the live site, keep a copy of the current repository or create a GitHub commit. This gives you an easy way to return to the previous site if you ever need to.

## Replace the current website with GitHub Desktop

| Step | Action |
|---|---|
| **1** | Install and open [GitHub Desktop](https://desktop.github.com/), then sign in to the GitHub account that owns the `mariomatovic/mariomatovic.github.io` repository. |
| **2** | Choose **File → Clone repository**, select `mariomatovic/mariomatovic.github.io`, and click **Clone**. |
| **3** | In GitHub Desktop, choose **Repository → Show in Explorer/Finder** to open the cloned repository folder. Do not delete the hidden `.git` folder. |
| **4** | Unzip `mario-matovic-github-pages.zip` into a temporary folder. Copy **all of its contents**—including `index.html`, `404.html`, `assets`, and `media`—into the cloned repository folder, replacing the old website files. |
| **5** | Return to GitHub Desktop. Review the changes, add a commit summary such as `Publish Training Ground Signal website`, and click **Commit to main**. |
| **6** | Click **Push origin**. GitHub Pages usually updates within a few minutes. |
| **7** | Open `https://mariomatovic.github.io/` and then test `https://mariomatovic.github.io/performance-window` directly. The second address is the standalone tool link for club emails. |

If GitHub Pages has not previously been configured, visit the repository on GitHub, open **Settings → Pages**, select **Deploy from a branch**, choose branch **main** and folder **/(root)**, then save.

## The best club-email format

Send a concise individual email and use **one direct Performance Window link plus the CV attachment**. The link gives clubs a useful, immediate experience; the CV covers credentials and history without forcing the email to become a brochure.

> **Subject:** How I train attention, action and instinct in performance
>
> Hi [Name],
>
> I work with athletes and coaching staffs on the mental side of real performance: how attention, action, emotion and learned skill meet under pressure.
>
> Rather than send a long presentation, I created a short interactive Performance Window that sets out the working philosophy in six chapters—how we train the brain, clear the mind, use emotion, work with visualization and self-talk, avoid common misconceptions, and embed the work in the training environment.
>
> **Performance Window:** `https://mariomatovic.github.io/performance-window`
>
> I have also attached my CV for context. If the approach is relevant to your environment, I would be glad to speak about the realities of your players, coaches, and training process.
>
> Best regards,  
> Mario Matovic  
> Mental Performance Coach  
> mariomatovic@gmail.com

Keep the email personal by adding one honest sentence about the club’s current level, playing environment, or coaching challenge. Do not turn the link into a long explanation—the Performance Window is now designed to carry that work.

## Two links to remember

| Use | Link |
|---|---|
| **Full website** | `https://mariomatovic.github.io/` |
| **Standalone Performance Window** | `https://mariomatovic.github.io/performance-window` |

---

## New: Direct Mental Training (added on top of the existing site)

This package now also includes a small standalone tool at `/method/`, plus a red **"Try the Method"** button fixed to the top-right corner of every page on the main site, linking to it.

- **Nothing in the existing site was changed or removed.** The button lives in its own `<style>`/`<a>` block appended at the very end of `index.html` and `404.html` (search for `DIRECT MENTAL TRAINING — CTA` in either file), completely outside the app's own code, so it can't interfere with it. To remove the button later, just delete that block.
- The tool itself is one self-contained file: `method/index.html`. No build step, no framework, no dependencies — plain HTML/CSS/JS, so it will keep working indefinitely and is easy to edit by hand.
- **To add a 5th command later:** open `method/index.html`, find the `STATES` array near the top of the `<script>` at the bottom of the file, and copy/paste one of the existing objects (id, name, desc, teaching, command). Nothing else needs to change.
- **To add your video:** the hero section has a placeholder video frame with an HTML comment right above it showing exactly what markup to swap in (a `<video>` tag or a YouTube/Vimeo embed).
- **Feedback form:** currently just confirms locally in the browser ("Thanks — noted.") — it isn't wired up to send anywhere yet. There's a `// TODO` comment at the spot in the script where a real form service or email endpoint can be plugged in.
- Live links once published:

| Use | Link |
|---|---|
| **Direct Mental Training** | `https://mariomatovic.github.io/method/` |
