export interface Route {
  path: string
  label: string
}

export type SiteMap = Record<string, Route>
