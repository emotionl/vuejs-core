// STUDY 01 补充说明 => ShapeFlags 解析

// 这段源码定义了一个常量枚举 ShapeFlags，用于表示 Vue 组件或元素的不同属性和特征的标志位。这些标志位是使用位运算的方式进行组合，以便更高效地表示和检测组件的状态和特性。
// 让我逐步解释这段源码的含义：
// 常量枚举定义： 使用 const enum 声明的常量枚举 ShapeFlags。常量枚举在编译时被内联，不会在生成的 JavaScript 代码中存在实际的对象。
// 标志位的定义： 每个标志位都是一个数字，通过左移操作（<<）生成，这是一种位运算的方式。左移的操作数是二进制数中的位数，例如 1 << 1 就是将二进制数 1 左移 1 位，得到二进制数 10，即 2。
// 不同的标志位： 在 ShapeFlags 中定义了多个不同的标志位，用于表示不同的组件特征或状态。例如：
// ELEMENT：表示元素
// FUNCTIONAL_COMPONENT：表示函数式组件
// STATEFUL_COMPONENT：表示有状态的组件
// TEXT_CHILDREN：表示文本子节点
// ARRAY_CHILDREN：表示数组子节点
// SLOTS_CHILDREN：表示插槽子节点
// TELEPORT：表示 Teleport 组件
// SUSPENSE：表示 Suspense 组件
// COMPONENT_SHOULD_KEEP_ALIVE：表示组件应该被保持活跃
// COMPONENT_KEPT_ALIVE：表示被保持活跃的组件
// COMPONENT：表示组件，可以是有状态的或函数式的
// 标志位的组合： 通过位运算，可以将不同的标志位组合成一个整数，用于表示组件的多个特征或状态。例如 COMPONENT 就是将 STATEFUL_COMPONENT 和 FUNCTIONAL_COMPONENT 这两个标志位通过位运算组合而成。
// 这种标志位的设计在 Vue 源码中常见，它可以高效地表示组件的特性和状态，同时也能够快速进行位运算的检测和操作，以优化性能。

export const enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT
}

// STUDY 01 补充说明 => ShapeFlags 中的位运算
// 1 << 2 | 1 << 1 => 4 | 2 => 0100 | 0010 => 0110 => 6
