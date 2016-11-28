package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import org.webjars.play.RequireJS
import play.api.i18n.MessagesApi
import play.api.i18n.I18nSupport
import scala.util.Try
import scala.util.Success
import scala.util.Failure

/**
* lots of boiler plate code. use for components that require Twirl treatment. Otherwise serve from static public resources.
**/
@Singleton
class ComponentsController @Inject()(val messagesApi: MessagesApi) extends Controller with I18nSupport {

  def serveTemplate(id: String) = Action {
    //implicitly include messagesApi to enable i18n
    VueComponent.templateFromId(id)(messagesApi) match {
      case Success(template) => Ok(template)
      case Failure(throwable) => BadRequest(throwable.getMessage)
    }
  }
  
 /**
  * a bit of boilerplate code to figure out which template is needed...
  */
 private object VueComponent {
   sealed abstract class Identifier(val id: String)
   case object Home extends Identifier("home")
   case object LogTime extends Identifier("logTime")
   case object Navbar extends Identifier("navbar")
   case object Sidebar extends Identifier("sidebar")
   case object TimeEntries extends Identifier("timeEntries")
   case object App extends Identifier("app")
   def templateFromId(id: String)(implicit messagesApi: MessagesApi): Try[play.twirl.api.Html] = {
     id match {
       case Home.id => Success(views.html.components.home())
       case LogTime.id => Success(views.html.components.logTime())
       case Navbar.id => Success(views.html.components.navbar())
       case Sidebar.id => Success(views.html.components.sidebar())
       case TimeEntries.id => Success(views.html.components.timeEntries())
       case App.id => Success(views.html.components.app())
       case _ => Failure(new Exception("template with id='" + id + "' not found!"))
     }
   }
 }

}
