name := """play-vuejs-seed"""
organization in ThisBuild := "Blue Skiron"
version := "1.0-SNAPSHOT"

scalaVersion := "2.11.8"

lazy val root = (project in file(".")).enablePlugins(PlayScala, SbtWeb)
///enable for babel es2015 transpilation
//JsEngineKeys.engineType := JsEngineKeys.EngineType.Node

routesGenerator := InjectedRoutesGenerator

libraryDependencies ++= Seq(
  filters,
  cache,
  "org.webjars" 		%% "webjars-play" 	 			% "2.5.0-4",
  "org.webjars" 		% "requirejs" 				  	% "2.3.2",
  "org.webjars" 		% "jquery" 				    	% "1.12.4",
  "org.webjars" 		% "bootstrap" 			 	  	% "3.3.7-1",
  "org.webjars" 		% "vue" 				   	    % "2.0.0"
)

// Configure the steps of the asset pipeline (used in stage and dist tasks)
// rjs = RequireJS, uglifies, shrinks to one file, replaces WebJars with CDN
// digest = Adds hash to filename
// gzip = Zips all assets, Asset controller serves them automatically when client accepts them
pipelineStages := Seq(rjs, digest, gzip)

// RequireJS with sbt-rjs (https://github.com/sbt/sbt-rjs#sbt-rjs)
// ~~~
RjsKeys.paths += ("jsRoutes" -> ("/jsroutes" -> "empty:"))

routesGenerator := InjectedRoutesGenerator

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"

scalacOptions in ThisBuild ++= Seq(
  "-target:jvm-1.8",
  "-encoding", "UTF-8",
  "-deprecation", // warning and location for usages of deprecated APIs
  "-feature", // warning and location for usages of features that should be imported explicitly
  "-unchecked", // additional warnings where generated code depends on assumptions
  "-Xlint", // recommended additional warnings
  //"-Ywarn-adapted-args", // Warn if an argument list is modified to match the receiver
  //"-Ywarn-value-discard", // Warn when non-Unit expression results are unused
  "-Ywarn-inaccessible",
  "-Ywarn-dead-code",
  "-language:postfixOps"
)

// All work and no play...
emojiLogs
