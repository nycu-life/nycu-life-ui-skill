# GitHub Actions runner routing

Linux jobs use the organization’s `nycu-life-linux` pool for pushes and pull requests from the same repository. Pull requests from an external fork keep the original `ubuntu-latest` GitHub-hosted runner. This public-repository exception preserves validation for external contributors without executing untrusted fork code on the shared runner pool.

Both routes execute the same checks. Runner selection does not skip validation or change publishing conditions, permissions, or secret availability. Do not replace this with `pull_request_target` to check out and execute fork code on the shared pool.
