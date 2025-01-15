sub init()
  m.top.backgroundURI = "pkg:/images/rsgde_bg_hd.jpg"

  m.panelset = createObject("roSGNode", "PanelSet")

  m.gridpanel = m.panelset.createChild("GridPanelExample")

  m.top.appendChild(m.panelset)

  m.gridpanel.setFocus(true)
end sub

