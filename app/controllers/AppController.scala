package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import play.api.i18n.I18nSupport
import play.api.i18n.MessagesApi
import org.webjars.play.RequireJS

class AppController @Inject() (webJarAssets: WebJarAssets, requireJS: RequireJS) extends Controller {
  
  /**
   * pass webJarAssets and requireJS
   */
  def index = Action {
    Ok(views.html.index(webJarAssets, requireJS))
  }
  
  def timeEntries = Action {
    //TODO
    Ok
  }
}