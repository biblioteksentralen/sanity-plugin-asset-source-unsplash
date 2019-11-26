export type Asset = {
  kind: 'url' | 'base64' | 'file' | 'assetDocumentId'
  value: string | File
  assetDocumentProps?: {
    originalFileName?: string
    label?: string
    title?: string
    description?: string
    source?: {
      id: string
      name: string
      url?: string
    }
    creditLine?: string
  }
}

export type AssetDocument = {
  _id: string
  label?: string
  title?: string
  description?: string
  source?: {
    id: string
    name: string
    url?: string
  }
  creditLine?: string
  originalFilename?: string
}

export type UnsplashPhoto = {
  id: string
  width: number
  height: number
  urls: {
    full: string
    small: string
  }
  user: {
    name: string
    username: string
    links: {
      html: string
    }
  }
  links: {
    html: string
    self: string
    download: string
    download_location: string
  }
}
