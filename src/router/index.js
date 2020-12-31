import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: 'home',
    component: Home,
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../components/CommonMain.vue")
      },

      {
        path: "/detail/:id",
        name: "detail",
        component: () => import("../views/detail.vue")
      },
      {
        path: "/one",
        name: "one",
        component: () => import("../components/CommonOne.vue")
      },
      {
        path: "/detail_one/:id",
        name: "detail_one",
        component: () => import("../views/detail_one.vue")
      },
      {
        path: "/dian",
        name: "dian",
        component: () => import("../components/CommonDian")
      },
      {
        path: "/detail_dian/:id",
        name: "detail_dian",
        component: () => import("../views/detail_dian")
      },
      {
        path: "/three",
        name: "three",
        component: () => import("../components/Commonthree.vue")
      },
      {
        path: "/detail_three_1/:id",
        name: "detail_three_1",
        component: () => import("../views/detail_three_1.vue")
      },
      {
        path: "/detail_three_2/:id",
        name: "detail_three_2",
        component: () => import("../views/detail_three_2.vue")
      },
      {
        path: "/detail_three_3/:id",
        name: "detail_three_3",
        component: () => import("../views/detail_three_3.vue")
      },
      {
        path: "/detail_three_4/:id",
        name: "detail_three_4",
        component: () => import("../views/detail_three_4.vue")
      },
      {
        path: "/three_chudian",
        name: "chudian",
        component: () => import("../components/CommonThree_chudian.vue")
      },
      {
        path: "/detail_three_chudian/:id",
        name: "zidong",
        component: () => import("../views/detail_three_chudian.vue")
      },
      {
        path: "/detail_three_chudian_2/:id",
        name: "shuangjin",
        component: () => import("../views/detail_three_chudian_2.vue")
      },
      {
        path: "/detail_three_chudian_3/:id",
        name: "dianjiao",
        component: () => import("../views/detail_three_chudian_3.vue")
      },
      {
        path: "/four",
        name: "four",
        component: () => import("../components/CommonFour.vue")
      },
      {
        path: "/defail_four_1/:id",
        name: "defail_four_1",
        component: () => import("../views/detail_four_1.vue")
      },
      {
        path: "/defail_four_2/:id",
        name: "defail_four_2",
        component: () => import("../views/detail_four_2.vue")
      },
      {
        path: "/defail_four_3/:id",
        name: "defail_four_3",
        component: () => import("../views/detail_four_3.vue")
      },
      {
        path: "/defail_four_4/:id",
        name: "defail_four_4",
        component: () => import("../views/detail_four_4.vue")
      },
      {
        path: "/defail_four_5/:id",
        name: "defail_four_5",
        component: () => import("../views/detail_four_5.vue")
      },
      {
        path: "/defail_four_6/:id",
        name: "defail_four_6",
        component: () => import("../views/detail_four_6.vue")
      },
      {
        path: "/five",
        name: "five",
        component: () => import("../components/CommonFive.vue")
      },
      {
        path: "/defail_five_1/:id",
        name: "defail_five_1",
        component: () => import("../views/detail_five_1.vue")
      },
      {
        path: "/defail_five_2/:id",
        name: "defail_five_2",
        component: () => import("../views/detail_five_2.vue")
      },
      {
        path: "/defail_five_3/:id",
        name: "defail_five_3",
        component: () => import("../views/detail_five_3.vue")
      },
      {
        path: "/six",
        name: "six",
        component: () => import("../components/CommonSix.vue")
      },
      {
        path: "/defail_six/:id",
        name: "defail_six",
        component: () => import("../views/detail_six.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
