# Subhasini Paul — Portfolio

Single-page portfolio built with **React + Vite** and plain CSS.

## Run it on your computer

You need [Node.js](https://nodejs.org) 20.19 or newer (22 LTS recommended).

```bash
npm install      # first time only
npm run dev      # start the site, then open http://localhost:5173
```

## Update the content

**Everything is in one file: `src/data/portfolioData.js`.**

| I want to change…                    | Section in `portfolioData.js`      |
| ------------------------------------ | ---------------------------------- |
| Name, email, phone, CGPA, photo      | `PERSONAL INFORMATION`             |
| CV / resume file                     | `cvPath` in `PERSONAL INFORMATION` |
| GitHub / LinkedIn links              | `SOCIAL LINKS`                     |
| Hero intro text                      | `HERO`                             |
| About text                           | `ABOUT`                            |
| Skills                               | `SKILLS`                           |
| Internship                           | `INTERNSHIP`                       |
| Projects and their Live/GitHub links | `PROJECTS`                         |
| UI/UX training                       | `UI/UX TRAINING`                   |
| Certificates and their links         | `CERTIFICATIONS`                   |
| Achievements                         | `ACHIEVEMENTS`                     |
| Education                            | `EDUCATION`                        |
| Contact text / form mode             | `CONTACT`                          |

- **Add a project:** copy one `{ ... }` block inside `projects.items`, paste it, edit the text.
- **Add a certificate:** copy one line inside `certifications.items`.
- **Links:** `"https://..."` = working button, `""` = "link coming soon", `null` = hidden.
- **Replace the CV:** put the new PDF in `public/` and change `cvPath`.
- **Add your photo:** put it in `public/` and set `photo: "/your-photo.jpg"`.
- **Page title / Google + social preview text:** edit the top of `index.html`.
- **Colours and fonts:** top of `src/styles/base.css`.

## Publish on Netlify

```bash
npm run build    # creates the "dist" folder
npm run preview  # optional: check the built site locally
```

- **Connected to GitHub:** push your code. Netlify reads `netlify.toml`
  (build command `npm run build`, publish folder `dist`) and deploys.
- **Manual:** drag the `dist` folder onto the Netlify "Deploys" page.

### Make the contact form deliver messages

The form uses **Netlify Forms**, so there is no password or API key in the code.

1. Deploy the site on Netlify.
2. In Netlify open **Forms** and click **Enable form detection**, then deploy once more.
3. Send a test message from the live site. It appears under **Forms > contact**.
4. To get messages by email: **Forms > Form notifications > Add notification > Email**.

On `localhost` the form only shows a note, because Netlify Forms exists on the live site only.
If you host somewhere else, set `formMode: "mailto"` in `portfolioData.js`.

## Folder map

```
index.html                 page title, SEO tags, fonts
public/                    CV PDF, favicon, social preview image
src/data/portfolioData.js  ALL the content  <-- edit this
src/components/            one file per section
src/styles/                one CSS file per section + base.css
src/hooks/                 small helpers for scroll animations
```
