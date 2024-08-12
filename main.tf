terraform { // terraform の設定
    required_providers { // 使用するプロバイダのバージョン指定
      google-beta = {
        source  = "hashicorp/google-beta" // プロバイダの名前
        version = "~> 4.0" // プロバイダのバージョン
      }
    }
}

provider "google-beta" {
    user_project_override = true
    region="asia-northeast1"
    alias = "user_project_override"
}

resource "google_firebase_web_app" "default" {
  provider = google-beta
  project  = "nextjs-myportfolio"
  display_name = "Test web app for Firebase Hosting"
}

// firebase hostingを使ってnextjsをデプロイする
resource "google_firebase_hosting_site" "nextjs_site" {
    provider = google-beta.user_project_override
    project = "nextjs-myportfolio"
    site_id = "nextjs-myportfolio-49450"
    app_id = google_firebase_web_app.default.app_id
}