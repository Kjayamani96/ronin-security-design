# Ronin Security website

Selected Bold & Modern website for Ronin Security Services (M) Sdn. Bhd.

Live website: https://kjayamani96.github.io/ronin-security-design/

## Local preview
Run `python3 -m http.server 8080 --directory dist` and open http://localhost:8080. No build step is required.

`dist/index.html` is the homepage. Credentials and newsletter pages are in `dist/credentials.html` and `dist/newsletter/`. Older concept links redirect to the selected site.

## Publish
Commit changes on main, then run `git subtree split --prefix dist -b pages-update` and `git push origin pages-update:gh-pages`. Use a fresh branch name on subsequent publishes.

Enquiry forms are demonstrations and do not send or store data. Original forms, credentials and unredacted documents are excluded. Image credits are in the website footer.
