<template>
	<div class="q1">
		<div class="header">
			<p class="title">化学题 1题/4题</p>
			<p class="question">{{question_name}}</p>

			<div class="answers">
				<ul>
					<li class="answer-item" @click="change_bg(0)" :class="{'selected_answer':bg_list[0]}">
						<span class="answer-alpha a"></span>{{an1}}</li>
					<li class="answer-item" @click="change_bg(1)" :class="{'selected_answer':bg_list[1]}">
						<span class="answer-alpha b"></span>{{an2}}</li>
					<li class="answer-item" @click="change_bg(2)" :class="{'selected_answer':bg_list[2]}">
						<span class="answer-alpha c"></span>{{an3}}</li>
				</ul>
			</div>
		</div>
		<div class="split-line"></div>
	</div>	
</template>	
<script>
	export default{
		created: function(){
			// this.type = this.$route.query.type;
			if(this.$route.query.type == 1){
				this.$store.commit('set_selected_question','science');
				// this.data = this.$store.getters.get_questions('science');
			}
			if(this.$route.query.type == 0){
				this.$store.commit('set_selected_question','liberal');
				// this.data = this.$store.getters.get_questions('liberal');
			}

			let step = this.$route.params.step*1;
			let {title,answers} = this.$store.state.selected_question[step-1];
			this.question_name = title;
			this.an1 = answers[0];
			this.an2 = answers[1];
			this.an3 = answers[2];
		},
		beforeRouteEnter: (to,from,next)=>{
			next()
		},
		beforeRouteUpdate: (to,from,next)=>{
			
			next()
		},
		watch: {
			'$route': function(n,o){
				this.bg_list = [!1,!1,!1];
				let step = this.$route.params.step*1;
				let {title,answers} = this.$store.state.selected_question[step-1];
				this.question_name = title;
				this.an1 = answers[0];
				this.an2 = answers[1];
				this.an3 = answers[2];
			}
		},
		data: function(){
			return {
				bg_list: [false,false,!1],
				question_name: '',
				an1: 'dfs',
				an2: 'srt',
				an3: 'ggh',
				data: null
			}
		},
		methods: {
			change_bg(index){
				this.bg_list = [!1,!1,!1];
				this.bg_list[index] = !0;

				setTimeout(()=>{
					if(this.$route.params.step*1+1>4){
						this.$router.replace('/result');
					}else{
						this.$router.replace('/question/'+(this.$route.params.step*1+1));
					}
				},1000)
			}
		}
	}
</script>
<style>
	.header{
		width: 90%;
		margin: 20px auto 0;
	}
	.title{
		height: 45px;
		line-height: 25px;
		text-align: center;
		background: url("../../imgs/bg-qustion-top.png") no-repeat center top;
		background-size: 100% auto;
	}
	.question{
		padding: 10px 15px;
		line-height: 20px;
		text-align: left;
		text-indent: 20px;
		background:	url("../../imgs/bg-question-center.png") no-repeat center top;
		background-size: 100% 100%;
	}
	.answers{
		padding: 10px 15px;
		height: 309px;
		background: url("../../imgs/bg-question-bottom.png") no-repeat center bottom;
		background-size: 100% auto;
	}
	.answer-item{
		height: 52px;
		width: 100%;
		margin: 8px 0;
		background: url('../../imgs/btn-bg-select.png') no-repeat;
		background-size: 304px 102px;
		line-height: 52px;
		color: #fff;
	}
	.answer-alpha{
		float: left;
		width: 30px;
		height: 30px;
		margin: 10px;
	}
	.a{
		background: url('../../imgs/a.png') no-repeat center center;
		background-size: contain;
	}
	.b{
		background: url('../../imgs/b.png') no-repeat center center;
		background-size: contain;
	}
	.c{
		background: url('../../imgs/c.png') no-repeat center center;
		background-size: contain;
	}
	.selected_answer{
		background-position: 0 -51px;
	}
</style>