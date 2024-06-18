<p align="center">
  <a href="https://otha.works/simple-captcha">
    <img src="/.github/ressources/flow-motion-github.png" alt="Flow Motion" width="325px">
  </a>
</p>

<p align="center">
Flow Motion is a modern animation library designed to create smooth, dynamic web animations with ease. Whether you're a beginner or an experienced developer, Flow Motion simplifies the process of adding engaging animations.
</p>

## Features ✨

- **Intuitive API**: Simple, easy-to-use syntax for creating animations.
- **High Performance**: Optimized for smooth and efficient animations across all devices.
- **Flexible**: Supports a wide range of animation types and customization options.
- **Compatible**: Works seamlessly with popular frameworks like React, Vue, and more.

## Installation 🚀

To install Flow Motion, use npm:

```bash
npm install flow-motion
```

## Getting Started
Here's a basic example to get you started with Flow Motion:

```javascript
import { animate } from 'flow-motion';

animate({
  element: '#myElement',
  properties: [
    { property: 'opacity', from: 0, to: 1 },
    { property: 'transform', from: 'translateY(50px)', to: 'translateY(0px)' }
  ],
  duration: 1000,
  easing: 'easeInOut'
});
```

## Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flow Motion Example</title>
  <style>
    #myElement {
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    }
  </style>
</head>
<body>
  <div id="myElement">Hello, Flow Motion!</div>

  <script src="node_modules/flow-motion/dist/flow-motion.min.js"></script>
  <script>
    FlowMotion.animate({
      element: '#myElement',
      properties: [
        { property: 'opacity', from: 0, to: 1 },
        { property: 'transform', from: 'translateY(50px)', to: 'translateY(0px)' }
      ],
      duration: 1000,
      easing: 'easeInOut'
    });
  </script>
</body>
</html>
```

## Documentation
For detailed usage, advanced examples, and API reference, visit our documentation.

## Contributing
We welcome contributions! If you'd like to contribute to Flow Motion, please follow these steps:

- Note*: Read our code of conduct
- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a new Pull Request.
- Please read our contributing guide for more details.

## License
Flow Motion is licensed under the MIT License. See the LICENSE file for more information.

## Stay Connected
Follow us on Twitter and GitHub for the latest updates and news.
