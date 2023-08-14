//封装分类数据业务相关代码
import {onMounted, ref } from 'vue';
import { getTopCategoryAPI } from '@/apis/category';
import {useRoute} from 'vue-router'
import {onBeforeRouteUpdate} from 'vue-router'
export function useCategory(){
    //获取分类数据
    const categoryData = ref([])
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
      // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
      const res = await getTopCategoryAPI(id)
      categoryData.value = res.result
    }
    onMounted(() => getCategory())

    //目标：路由参数变化时，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
    //to为目标路由对象，相当于使用最新的路由参数请求最新的分类数据
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}