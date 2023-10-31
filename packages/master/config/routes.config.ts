/**
 * @name Umi Route Configuration
 * @description Supports configuration for path, component, routes, redirect, wrappers, name, and icon only.
 * @param path Path supports two types of placeholders: the first type is dynamic parameters in the form of :id, and the second type is a wildcard * which can only appear at the end of the route string.
 * @param component Configures the React component path to be rendered when location and path match. It can be an absolute path or a relative path. If it's a relative path, it will start searching from src/pages.
 * @param routes Configures child routes, usually used when you need to add layout components for multiple paths.
 * @param redirect Configures route redirection.
 * @param wrappers Configures wrapping components for route components. Wrapping components can add more functionality to the current route component, such as route-level permission checks.
 * @param name Configures the title of the route. By default, it reads the value from the internationalization file menu.ts under menu.xxxx. If the name is configured as "login," it will read the value from menu.ts under menu.login as the title.
 * @param icon Configures the icon for the route. Refer to https://ant.design/components/icon-cn for available icon values. Be sure to remove the style suffix and use lowercase, for example, if you want to configure the icon as <StepBackwardOutlined />, the value should be "stepBackward" or "StepBackward," and if you want to configure the icon as <UserOutlined />, the value should be "user" or "User."
 * @doc https://umijs.org/docs/guides/routes
 */

export default [
  { path: '/', name: 'Home', component: './Home' },
  { path: '/micro/*', name: 'Micro', microApp: 'app' },
];
