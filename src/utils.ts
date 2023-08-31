import * as semver from 'semver'

/**
 * extracts the major node version from passed in version if not set return default
 * @default 16
 */
export function getMajorNodeVersion(nodeVersion: string | undefined): number {
  if (!nodeVersion)
    return 16
  const parsed = semver.coerce(nodeVersion)
  if (!parsed)
    throw new Error(`Could not parse node version ${nodeVersion}`)
  return parsed.major
}