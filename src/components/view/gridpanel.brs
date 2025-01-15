sub init()
  m.top.panelSize = "full"
  m.top.isFullScreen = true
  m.top.leftPosition = 130
  m.top.focusable = true
  m.top.hasNextPanel = false
  m.top.createNextPanelOnItemFocus = false

  m.top.grid = m.top.findNode("examplePosterGrid")

  m.readPosterGridTask = createObject("roSGNode", "ContentReader")
  m.readPosterGridTask.contenturi = "http://www.sdktestinglab.com/Tutorial/content/rendergridps.xml"
  m.readPosterGridTask.observeField("content", "showpostergrid")
  m.readPosterGridTask.control = "RUN" 
end sub

sub showpostergrid()
  m.top.grid.content = m.readPosterGridTask.content 
end sub

