import Vue from 'vue';
import Router from 'vue-router';
import question from '../view/question/index.vue';
import result from '../view/result/index.vue';
import home from '../view/home/index.vue';
Vue.use(Router);

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		name: 'home',
		path: '/home',
		component: home,
		beforeEnter: function(to,from,next){
			next()
		}
	},
	{
		name: 'question',
		path: '/question/:step',
		component: question
	},
	{
		name: 'result',
		path: '/result',
		component: result
	}
];

let router = new Router({
	routes: routes
})

router.beforeEach(function(to,from,next){
	next()
})
export default router