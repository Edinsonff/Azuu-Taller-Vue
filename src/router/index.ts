import { createRouter, createWebHistory } from "vue-router";
import NosotrosView from "@/components/NosotrosView.vue";
import ProjectDetail from "@/components/ProjectDetail.vue";
import ProjectSlider from "@/components/ProjectSlider.vue";
import ProjectGallery from "@/components/ProjectGallery.vue";
const routes = [
  {
    path: "/",
    redirect: "/slider",
  },
  {
    path: "/slider",
    name: "ProjectSlider",
    component: ProjectSlider,
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: NosotrosView,
  },
  {
    path: "/project/:id",
    name: "project-detail",
    component: ProjectDetail,
    props: true,
  },
  {
    path: "/gallery",
    name: "ProjectGallery",
    component: ProjectGallery,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
