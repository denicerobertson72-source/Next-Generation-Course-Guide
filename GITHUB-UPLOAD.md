# Put this prototype into GitHub

This folder is ready to become the working repository for the **Next Generation Course Guide**.

## If your repository currently contains only the README and MVP spec

Upload the contents of this folder into the repository root. Keep the existing repository README/spec only if they are newer than the copies here.

The repository root should end up looking like:

```text
Next-Generation-Course-Guide/
├── app/
├── src/
├── docs/
├── .gitignore
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

## GitHub web interface

1. Open the repository.
2. Choose **Add file → Upload files**.
3. Drag the files/folders from this prototype into the upload area.
4. Use the commit message: `Build first Course Guide vertical slice`.
5. Commit to `main` for this early prototype, or use a branch such as `prototype/vertical-slice-01` if you prefer review before merging.

GitHub's web uploader can be awkward with nested folders. If it refuses a folder, uploading the supplied ZIP to GitHub will **not** unpack it automatically; use Git or GitHub Desktop instead.

## Git / GitHub Desktop

Copy the prototype contents into your local repository, then commit and push. No secrets are required for this version.

## Run after cloning

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Important

There is **no OpenAI API key in this prototype**. Do not add an API key to committed source code when AI integration begins; it will go into server-side environment variables / repository secrets.
