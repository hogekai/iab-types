Pre-commit release preparation for iab-types monorepo (changesets).

## Steps

1. **Diff analysis**: Run `git diff --cached` and `git diff` to understand all staged and unstaged changes since the last commit. Check for pending changesets in `.changeset/`.

2. **Changeset check**: If there are no changesets yet for the current changes, run `npx changeset` interactively or create the changeset file manually based on the diff analysis. Determine which packages are affected and the appropriate bump level:
   - **patch**: bug fixes, documentation updates, internal refactors with no API surface change
   - **minor**: new fields added to interfaces (backward-compatible additions)
   - **major**: breaking changes — removed/renamed fields, type changes, dropped exports
   Present your reasoning and the proposed bumps. Ask for confirmation before proceeding.

3. **Version**: Run `npx changeset version` to consume changesets and bump `package.json` versions + update `CHANGELOG.md` for each affected package.

4. **Lint**: Run `pnpm lint`. If it fails, fix auto-fixable issues with `pnpm lint:fix` and report any remaining errors.

5. **Typecheck**: Run `pnpm typecheck`. If it fails, report the errors and attempt to fix them.

6. **Test**: Run `pnpm test`. If any tests fail, report which ones and attempt to fix them. If unfixable, stop and report.

7. **Build**: Run `pnpm build`. If it fails, report the errors and attempt to fix them.

8. **Commit**: Stage all changed files and create a commit with the message `chore(release): <package>@<version>` (or list multiple packages if more than one was bumped).

9. **Tag**: Create annotated git tags for each bumped package: `git tag -a <package>@<version> -m "<package>@<version>"`.

10. **Summary**: Report the final state — versions, changelog entries, tags, and lint/typecheck/test/build results. Do NOT push — that's the user's next step.

## Notes
- If there are no meaningful changes (working tree clean, nothing staged, no pending changesets), say so and stop.
- The user may pass an argument to override the bump level, e.g. `/prep-release minor`.
- Verify type definitions against specs in `specs/` if the changes involve type modifications.
