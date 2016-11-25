package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import org.webjars.play.RequireJS
import play.api.i18n.MessagesApi
import play.api.i18n.I18nSupport

/**
* lots of boiler plate code. use for components that require Twirl treament. Otherwise serve from static public resources.
**/
@Singleton
class ComponentsController @Inject()(val messagesApi: MessagesApi) extends Controller with I18nSupport {

  def app = Action {
    Ok(views.html.components.app(None))
  }

  def home = Action {
    Ok(views.html.components.home(None))
  }


  def logTime = Action {
    Ok(views.html.components.logTime(None))
  }


  def sidebar = Action {
    Ok(views.html.components.sidebar(None))
  }


  def timeEntries = Action {
    Ok(views.html.components.timeEntries(None))
  }

}
