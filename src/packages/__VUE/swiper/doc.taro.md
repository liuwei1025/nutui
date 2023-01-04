# Swiper 轮播

### 介绍

常用于一组图片或卡片轮播。

### 安装

```javascript
import { createApp } from 'vue';
import { Swiper,SwiperItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(Swiper);
app.use(SwiperItem);
```

### 基础用法

`auto-play` 自动轮播的时长
`init-page` 初始索引值
`pagination-visible` 是否显示分页指示器
`pagination-color` 指示器颜色自定义

:::demo

```html
<template>
  <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page: 2,
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::

### 异步加载

:::demo

```html
<template>
  <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
     <nut-swiper-item v-for="item in list" :key="item">
        <img :src="item" alt="" />
      </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page: 2,
        list: [] as string[]
      });
      onMounted(() => {
        setTimeout(() => {
          state.list = [
            'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
            'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
            'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
            'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
          ];
        }, 3000);
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::

### 动态加载

支持动态增加/删除图片

:::demo

```html
<template>
  <nut-swiper :init-page="page" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
     <nut-swiper-item v-for="item in list" :key="item">
        <img :src="item" alt="" />
      </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs, onMounted } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page: 2,
        list: [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ]
      });
      onMounted(() => {
        setTimeout(() => {
          state.list.splice(1, 1);
        }, 3000);
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::

### 自定义大小

`width` 自定义轮播大小

:::demo

```html
<template>
  <nut-swiper :init-page="page2" :loop="false" width="300">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page2: 2,
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::

### 自定义分页指示器

`v-slot:page` 表示自定义指示器

:::demo

```html
<template>
  <nut-swiper :init-page="page3" :loop="true" @change="change">
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
      </nut-swiper-item>
      <template v-slot:page>
        <div class="page"> {{ current }}/4 </div>
      </template>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page3: 0,
        current: 1
      });
      const change = (index: number) => {
        state.current = index + 1;
      };
      return { ...toRefs(state), change };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .page {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 46px;
    height: 22px;
    background: rgba(0, 0, 0, 0.33);
    border-radius: 22px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
</style>
```

:::

### 手动切换

可通过 `API`(`prev`,`next`)进行手动切换

:::demo

```vue
<template>
  <view class="demo-box">
    <nut-swiper :init-page="page" :loop="true" ref="swiper">
      <nut-swiper-item v-for="item in list" :key="item">
        <img :src="item" alt="" />
      </nut-swiper-item>
    </nut-swiper>
    <view class="nut-swiper-btns">
      <span class="nut-swiper-btns__left" @click="handlePrev">
        <Left></Left>
      </span>
      <span class="nut-swiper-btns__left" @click="handleNext">
        <Right></Right>
      </span>
    </view>
  </view>
</template>
<script lang="ts">
  import { reactive, toRefs, ref, Ref } from 'vue';
  import { Left, Right } from '@nutui/icons-vue';
  export default {
    components: { 
      Left, 
      Right 
    },
    setup() {
      const swiper = ref(null) as Ref;
      const state = reactive({
        page: 2,
        list: [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ],
      });
      const handlePrev = () => {
        swiper.value.prev();
      };
      const handleNext = () => {
        swiper.value.next();
      };
      
      return { ...toRefs(state), swiper, handlePrev, handleNext };
    }
  };
</script>
<style lang="scss" scoped>
  .demo-box{
    position: relative;
  }
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nut-swiper-btns{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    display: flex;
    justify-content: space-between;
    span{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 30px;
      background-color: rgba(0,0,0,.2);
    }
  }
</style>
```

:::

### 垂直方向

`direction` 自定义轮播方向

:::demo

```html
<template>
  <nut-swiper :init-page="page4" :loop="true" auto-play="3000" direction="vertical" height="150" :pagination-visible="true" style="height: 150px">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg'" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page4: 0
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
    ::v-deep(.nut-swiper-pagination-vertical) {
      i{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        &.active{
          height: 18px;
          border-radius: 5px;
        }
      }
    }
  }
</style>
```

:::


### 水平居中展示

`is-center` 代表可居中，同时必须传 `width`

:::demo

```html
<template>
  <nut-swiper :init-page="page" :loop="false" width="280" height="150" :is-center="true" style="height: 150px">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page: 0
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::

### 垂直居中展示

`is-center` 代表可居中，同时必须传 `height`

:::demo

```html
<template>
  <nut-swiper :init-page="page" :loop="false" direction="vertical" height="220" :is-center="true" style="height: 300px">
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
    </nut-swiper-item>
    <nut-swiper-item>
      <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        page: 0
      });
      return { ...toRefs(state) };
    }
  };
</script>
<style lang="scss" scoped>
  .nut-swiper-item {
    line-height: 300px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
```

:::


## API

### Props

| 参数                   | 说明                                                        | 类型           | 默认值      |
| ---------------------- | ----------------------------------------------------------- | -------------- | ----------- |
| width                   | 轮播卡片的宽度           | Number、String        | window.innerWidth       |
| height                | 轮播卡片的高度                                                    | String、Number | 0        |
| direction               | 轮播方向,可选值`horizontal`,`vertical`     | String | 'horizontal'         |
| pagination-visible          | 分页指示器是否展示                                              | Boolean         | false           |
| pagination-color         | 分页指示器选中的颜色                                              | String  | '#fff'           |
| loop           | 是否循环轮播                                                | Boolean        | true       |
| duration                | 动画时长（单位是ms）                                                | Number、String        | 500        |
| auto-play | 自动轮播时长，0表示不会自动轮播                                          | Number、String        | 0        |
| init-page               | 初始化索引值                   | Number、String         | 0    |
| touchable             | 是否可触摸滑动                                                      | Boolean         | true          |
| is-preventDefault                  | 滑动过程中是否禁用默认事件                                              | Boolean  | true           |
| is-stopPropagation               | 滑动过程中是否禁止冒泡                    | Boolean         | true    |



### Events

| 事件名           | 说明                   | 回调参数     |
| ---------------- | ---------------------- | ------------ |
| change            | 滑动之后的回调         | 当前索引值index |



### Swipe 方法

| 事件名           | 说明                   | 参数     |
| ---------------- | ---------------------- | ------------ |
| prev            | 切换到上一页         | - |
| next            | 切换到下一页         | - |
| to            | 切换到指定轮播         | index:number |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                    | 默认值                     | 描述 |
| --------------------------------------- | -------------------------- | ---- |
| --nut-swiper-pagination-item-width| _8px_  | -  |
| --nut-swiper-pagination-item-height| _3px_  | -  |
| --nut-swiper-pagination-item-margin-right| _7px_  | -  |
| --nut-swiper-pagination-item-border-radius| _2px_  | -  |