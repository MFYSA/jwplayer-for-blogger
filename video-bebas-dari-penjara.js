var frames = document.getElementsByTagName('iframe');
for (var frame of frames) {
  frame.setAttribute("sandbox", "allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-top-navigation allow-forms");
}
