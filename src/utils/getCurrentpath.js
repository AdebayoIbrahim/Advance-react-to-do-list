export function GetcurrPath() {
  //   const { pathname } = useResolvedPath();
  const pathname = window.location.pathname;
  let route;
  switch (pathname) {
    case "/":
      return (route = "myday");
    case "/important":
      return (route = "important");
    case "/planned":
      return (route = "planned");
    case "/assigned":
      return (route = "assigned");
    case "/tasks":
      return (route = "tasks");
    default:
      route = "myday";
      break;
  }

  console.log(route);
  return route;
}
