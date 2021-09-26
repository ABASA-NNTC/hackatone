window.onload = function () {

	//Подготовка блоков, если пользователь нажал на кнопку "0-17"

		//Кнопка "Посмотреть доступные льготы"

			function ShowQuestionResult() {
				let div = document.createElement('div');
				div.classList.add('question');
				div.innerHTML = '<p>Посмотрите доступные вам льготы</p>';
				document.querySelector(".test").appendChild(div);
			}

		//Кнопка "Посмотреть"

			function ShowButtonResult() {
				let div = document.createElement('div');
				div.classList.add('button-result');
				div.innerHTML = 'Посмотреть';
				document.querySelector('.test').appendChild(div);
			}	

		//Вопрос "Выберите ваш социальный статус"

			function ShowQuestionSocStatFor1() {
				let div = document.createElement('div');
				div.classList.add('question');
				div.innerHTML = '<p>Выберите ваш социальный статус</p>';
				document.querySelector(".test").appendChild(div);
			}

		//Кнопки "Дошкольник", "Школьник", "Студент"

			function ShowButton1SocStatFor1() {
				let div = document.createElement('div');
				div.classList.add('button1-1');
				div.innerHTML = 'Дошкольник';
				document.querySelector('.test').appendChild(div);
			}

			function ShowButton2SocStatFor1() {
				let div = document.createElement('div');
				div.classList.add('button2-1');
				div.innerHTML = 'Школьник';
				document.querySelector('.test').appendChild(div);
			}

			function ShowButton3SocStatFor1() {
				let div = document.createElement('div');
				div.classList.add('button3-1');
				div.innerHTML = 'Студент';
				document.querySelector('.test').appendChild(div);
			}

			//Нажатие на кнопки

			//Вопрос "Сколько вам лет?"

			document.querySelector('.test').addEventListener('click', function (e) {

				if (e.target.classList.contains('button1')) {
					document.querySelector('.question').remove();
	                document.querySelector('.button1').remove();
	                document.querySelector('.button2').remove();
	                document.querySelector('.button3').remove();
	                ShowQuestionSocStatFor1()
	                ShowButton1SocStatFor1();
	                ShowButton2SocStatFor1();
	                ShowButton3SocStatFor1();
	            }

	            else if (e.target.classList.contains('button2')) {
	            	document.querySelector('.question').remove();
	                document.querySelector('.button1').remove();
	                document.querySelector('.button2').remove();
	                document.querySelector('.button3').remove();
	                ShowQuestionSocStatFor2()
	                ShowButton1SocStatFor2();
	                ShowButton2SocStatFor2();
	                ShowButton3SocStatFor2();
	            }

	            else if (e.target.classList.contains('button3')) {
	            	document.querySelector('.question').remove();
	                document.querySelector('.button1').remove();
	                document.querySelector('.button2').remove();
	                document.querySelector('.button3').remove();
	                ShowQuestionWorldWar();
	                ShowButton1WorldWar();
	                ShowButton2WorldWar();
	            }

			})


			//Подготовка блоков, если пользователь нажал на кнопку "Дошкольник, Школьник или Студент"

				//Вопрос "Есть ли у вас семья?"

				function ShowQuestionFamily() {
					let div = document.createElement('div');
					div.classList.add('question');
					div.innerHTML = '<p>Есть ли у вас семья?</p>';
					document.querySelector(".test").appendChild(div);
				}

				//Кнопки "Да", "Нет"

				function ShowButton1Family() {
					let div = document.createElement('div');
					div.classList.add('button1-1-1');
					div.innerHTML = 'Да';
					document.querySelector('.test').appendChild(div);
				}


				function ShowButton2Family() {
					let div = document.createElement('div');
					div.classList.add('button2-1-1');
					div.innerHTML = 'Нет';
					document.querySelector('.test').appendChild(div);
				}

			//Нажатие на кнопки

				// Вопрос "У вас есть семья?"

				document.querySelector('.test').addEventListener('click', function (e) {

					if (e.target.classList.contains('button1-1')) {
						document.querySelector('.question').remove();
            		    document.querySelector('.button1-1').remove();
            		    document.querySelector('.button2-1').remove();
            		    document.querySelector('.button3-1').remove();
            		    ShowQuestionFamily();
            		    ShowButton1Family();
            		    ShowButton2Family();
            		}
		
            		else if (e.target.classList.contains('button2-1')) {
            			document.querySelector('.question').remove();
            		    document.querySelector('.button1-1').remove();
            		    document.querySelector('.button2-1').remove();
            		    document.querySelector('.button3-1').remove();
            		    ShowQuestionFamily();
            		    ShowButton1Family();
            		    ShowButton2Family();
            		}

            		else if (e.target.classList.contains('button3-1')) {
            			document.querySelector('.question').remove();
            		    document.querySelector('.button1-1').remove();
            		    document.querySelector('.button2-1').remove();
            		    document.querySelector('.button3-1').remove();
            		    ShowQuestionFamily();
            		    ShowButton1Family();
            		    ShowButton2Family();
            		    Showlgotsl1();
            		}
            	})

            	//Подготовка блоков, если пользователь нажал на кнопку "Да?"

            		//Вопрос "У вас полноценная семья?"

            		function ShowQuestionFullFamily() {
						let div = document.createElement('div');
						div.classList.add('question');
						div.innerHTML = '<p>У вас полная или неполная семья?</p>';
						document.querySelector(".test").appendChild(div);
					}

					//Кнопки "Да", "Нет"

					function ShowButton1FullFamily() {
						let div = document.createElement('div');
						div.classList.add('button1-1-2');
						div.innerHTML = 'Полная';
						document.querySelector('.test').appendChild(div);
					}


					function ShowButton2FullFamily() {
						let div = document.createElement('div');
						div.classList.add('button2-1-2');
						div.innerHTML = 'Неполная';
						document.querySelector('.test').appendChild(div);
					}

					//Нажатие на кнопки

					document.querySelector('.test').addEventListener('click', function (e) {

						if (e.target.classList.contains('button1-1-1')) {
							document.querySelector('.question').remove();
            			    document.querySelector('.button1-1-1').remove();
            			    document.querySelector('.button2-1-1').remove();
            			    ShowQuestionFullFamily();
            			    ShowButton1FullFamily();
            			    ShowButton2FullFamily();
            			}

            			else if (e.target.classList.contains('button2-1-1')) {
							document.querySelector('.question').remove();
            			    document.querySelector('.button1-1-1').remove();
            			    document.querySelector('.button2-1-1').remove();
            			    ShowQuestionInvalid();
            			    ShowButton1Invalid();
            			    ShowButton2Invalid();
            			}
            		})

            		//Подготовка блоков, если пользователь нажал "Да или Нет"

            			//Вопрос "У вас есть инвалидность"

            				function ShowQuestionInvalid() {
								let div = document.createElement('div');
								div.classList.add('question');
								div.innerHTML = '<p>У вас есть инвалидность?</p>';
								document.querySelector(".test").appendChild(div);
							}

						//Кнопки "Да", "Нет"

							function ShowButton1Invalid() {
								let div = document.createElement('div');
								div.classList.add('button1-1-3');
								div.innerHTML = 'Да';
								document.querySelector('.test').appendChild(div);
							}


							function ShowButton2Invalid() {
								let div = document.createElement('div');
								div.classList.add('button2-1-3');
								div.innerHTML = 'Нет';
								document.querySelector('.test').appendChild(div);
							}

						//Нажатие на кнопки

						document.querySelector('.test').addEventListener('click', function (e) {

							if (e.target.classList.contains('button1-1-2')) {
								document.querySelector('.question').remove();
            			    	document.querySelector('.button1-1-2').remove();
            			    	document.querySelector('.button2-1-2').remove();
            			    	ShowQuestionInvalid();
            			    	ShowButton1Invalid();
            			    	ShowButton2Invalid();
            				}

            				else if (e.target.classList.contains('button2-1-2')) {
								document.querySelector('.question').remove();
            			    	document.querySelector('.button1-1-2').remove();
            			    	document.querySelector('.button2-1-2').remove();
            			    	ShowQuestionInvalid();
            			    	ShowButton1Invalid();
            			    	ShowButton2Invalid();
            			    	Showlgotsl3();
            				}

						})

					//Если пользователь нажал, что у него есть инвалидность

						//Вопрос "Укажите группу вашей инвалидности"

							function ShowQuestionGroupInvalid() {
								let div = document.createElement('div');
								div.classList.add('question');
								div.innerHTML = '<p>Укажите группу вашей инвалидности</p>';
								document.querySelector(".test").appendChild(div);
							}

						//Кнопки "1а", "2а", "3я"

							function ShowButton1Invalid1() {
								let div = document.createElement('div');
								div.classList.add('button1-1-4');
								div.innerHTML = 'Первая группа';
								document.querySelector('.test').appendChild(div);
							}


							function ShowButton2Invalid2() {
								let div = document.createElement('div');
								div.classList.add('button2-1-4');
								div.innerHTML = 'Вторая группа';
								document.querySelector('.test').appendChild(div);
							}

							function ShowButton2Invalid3() {
								let div = document.createElement('div');
								div.classList.add('button3-1-4');
								div.innerHTML = 'Третья группа';
								document.querySelector('.test').appendChild(div);
							}

						//Нажатие на кнопки

						document.querySelector('.test').addEventListener('click', function (e) {

							if (e.target.classList.contains('button1-1-3')) {
								document.querySelector('.question').remove();
            			    	document.querySelector('.button1-1-3').remove();
            			    	document.querySelector('.button2-1-3').remove();
            			    	ShowQuestionGroupInvalid();
            			    	ShowButton1Invalid1();
            			    	ShowButton2Invalid2();
            			    	ShowButton2Invalid3();
            				}

            				else if (e.target.classList.contains('button2-1-3')) {
								document.querySelector('.question').remove();
            			    	document.querySelector('.button1-1-3').remove();
            			    	document.querySelector('.button2-1-3').remove();
            			    	ShowQuestionDohod();
            			    	ShowButton1Dohod();
            			    	ShowButton2Dohod();
            				}

						})

					// Если пользователь указал группу инвалидности

						//Нажатие на кнопки

						document.querySelector('.test').addEventListener('click', function (e) {

							if (e.target.classList.contains('button1-1-4')) {
								document.querySelector('.question').remove();
            			    	document.querySelector('.button1-1-4').remove();
            			    	document.querySelector('.button2-1-4').remove();
            			    	document.querySelector('.button3-1-4').remove();
            			    	ShowQuestionDohod();
            			    	ShowButton1Dohod();
            			    	ShowButton2Dohod();
            			    	Showlgotsl2();
            				}

            				else if (e.target.classList.contains('button2-1-4')) {
								document.querySelector('.question').remove();
            			    	document.querySelector('.button1-1-4').remove();
            			    	document.querySelector('.button2-1-4').remove();
            			    	document.querySelector('.button3-1-4').remove();
            			    	ShowQuestionDohod()
            			    	ShowButton1Dohod();
            			    	ShowButton2Dohod();
            			    	Showlgotsl2();
            				}

            				else if (e.target.classList.contains('button3-1-4')) {
								document.querySelector('.question').remove();
            			    	document.querySelector('.button1-1-4').remove();
            			    	document.querySelector('.button2-1-4').remove();
            			    	document.querySelector('.button3-1-4').remove();
            			    	ShowQuestionDohod()
            			    	ShowButton1Dohod();
            			    	ShowButton2Dohod();
            			    	Showlgotsl2();
            				}

						})

				//Вопрос про доход семьи или личный доход

					function ShowQuestionDohod() {
						let div = document.createElement('div');
						div.classList.add('question');
						div.innerHTML = '<p>Ваш доход или доход вашей семьи ниже прожиточного минимума?</p>';
						document.querySelector(".test").appendChild(div);
					}

				//Кнопки "Да", "Нет"

					function ShowButton1Dohod() {
						let div = document.createElement('div');
						div.classList.add('button1-1-5');
						div.innerHTML = 'Да';
						document.querySelector('.test').appendChild(div);
					}


					function ShowButton2Dohod() {
						let div = document.createElement('div');
						div.classList.add('button2-1-5');
						div.innerHTML = 'Нет';
						document.querySelector('.test').appendChild(div);
					}

				//Нажатие на кнопки

					document.querySelector('.test').addEventListener('click', function (e) {

						if (e.target.classList.contains('button1-1-5')) {
							document.querySelector('.question').remove();
            			   	document.querySelector('.button1-1-5').remove();
            			   	document.querySelector('.button2-1-5').remove();
            			   	Showlgotsl8();
            			   	Showlgotsl9();
            			   	Showlgotsl10();
            			   	Showlgotsl11();
            			   	Showlgotsl12();
            			   	ShowBot();
            			}

            			else if (e.target.classList.contains('button2-1-5')) {
							document.querySelector('.question').remove();
            			   	document.querySelector('.button1-1-5').remove();
            			   	document.querySelector('.button2-1-5').remove();
            			   	ShowBot();
            			}

					})










		//Подготовка блоков, если пользователь нажал на кнопку "18-64"

			//Вопрос "Выберите ваш социальный статус"

				function ShowQuestionSocStatFor2() {
					let div = document.createElement('div');
					div.classList.add('question');
					div.innerHTML = '<p>Выберите ваш социальный статус</p>';
					document.querySelector(".test").appendChild(div);
				}

			//Кнопки "Безработный", "Работаю", "Учащийся"

				function ShowButton1SocStatFor2() {
					let div = document.createElement('div');
					div.classList.add('button1-2');
					div.innerHTML = 'Безработный';
					document.querySelector('.test').appendChild(div);
				}
				
				function ShowButton2SocStatFor2() {
					let div = document.createElement('div');
					div.classList.add('button2-2');
					div.innerHTML = 'Работаю';
					document.querySelector('.test').appendChild(div);
				}

				function ShowButton3SocStatFor2() {
					let div = document.createElement('div');
					div.classList.add('button3-2');
					div.innerHTML = 'Учащийся';
					document.querySelector('.test').appendChild(div);
				}


				//Если пользователь нажал на "Работаю"

					//Вопрос "Где вы работаете?"

						function ShowQuestionKindJob() {
							let div = document.createElement('div');
							div.classList.add('question');
							div.innerHTML = '<p>Где вы работаете?</p>';
							document.querySelector(".test").appendChild(div);
						}

					//Кнопки "Военные структуры" "Госслужащий" "Другая сфера"

						function ShowButton1Voen() {
							let div = document.createElement('div');
							div.classList.add('button1-2-1');
							div.innerHTML = 'Военнослужащий';
							document.querySelector('.test').appendChild(div);
						}
						
						function ShowButton2Gos() {
							let div = document.createElement('div');
							div.classList.add('button2-2-1');
							div.innerHTML = 'Госслужащий';
							document.querySelector('.test').appendChild(div);
						}

						function ShowButton3Other() {
							let div = document.createElement('div');
							div.classList.add('button3-2-1');
							div.innerHTML = 'Другая сфера';
							document.querySelector('.test').appendChild(div);
						}

					//Нажатие на кнопки

					document.querySelector('.test').addEventListener('click', function (e) {

						if (e.target.classList.contains('button1-2')) {
							document.querySelector('.question').remove();
	            		   	document.querySelector('.button1-2').remove();
	            		   	document.querySelector('.button2-2').remove();
	            		   	document.querySelector('.button3-2').remove();
	            		   	ShowQuestionKids();
	            		   	ShowButton1Kids();
	            		   	ShowButton2Kids();
	            		}

	            		else if (e.target.classList.contains('button2-2')) {
							document.querySelector('.question').remove();
	            		   	document.querySelector('.button1-2').remove();
	            		   	document.querySelector('.button2-2').remove();
	            		   	document.querySelector('.button3-2').remove();
	            		   	ShowQuestionKindJob();
	            		   	ShowButton1Voen();
	            		   	ShowButton2Gos();
	            		   	ShowButton3Other();
	            		}

	            		else if (e.target.classList.contains('button3-2')) {
							document.querySelector('.question').remove();
	            		   	document.querySelector('.button1-2').remove();
	            		   	document.querySelector('.button2-2').remove();
	            		   	document.querySelector('.button3-2').remove();
	            		   	ShowQuestionWorkNot();
	            		   	ShowButton1WorkNot();
	            		   	ShowButton2WorkNot();
	            		   	Showlgotsl1();
	            		}

					})

				//Если пользователь нажал на "Учащийся"

					//Вопрос "Где вы работаете паралелльно?"

						function ShowQuestionWorkNot() {
							let div = document.createElement('div');
							div.classList.add('question');
							div.innerHTML = '<p>Вы работаете параллельно?</p>';
							document.querySelector(".test").appendChild(div);
						}

					//Кнопки "Да" "Нет" 

						function ShowButton1WorkNot() {
							let div = document.createElement('div');
							div.classList.add('button1-2-2-1');
							div.innerHTML = 'Да';
							document.querySelector('.test').appendChild(div);
						}
						
						function ShowButton2WorkNot() {
							let div = document.createElement('div');
							div.classList.add('button2-2-2-1');
							div.innerHTML = 'Нет';
							document.querySelector('.test').appendChild(div);
						}

					//Нажатие кнопок

						//Если пользователь ответил "Да" или "Нет" работает ли он параллельно

						document.querySelector('.test').addEventListener('click', function (e) {
							if (e.target.classList.contains('button1-2-2-1')) {
								document.querySelector('.question').remove();
		            		   	document.querySelector('.button1-2-2-1').remove();
		            		   	document.querySelector('.button2-2-2-1').remove();
		            		   	ShowQuestionKindJob();
		            		   	ShowButton1Voen();
		            		   	ShowButton2Gos();
		            		   	ShowButton3Other();
		            		}

		            		else if (e.target.classList.contains('button2-2-2-1')) {
								document.querySelector('.question').remove();
								document.querySelector('.button1-2-2-1').remove();
		            		   	document.querySelector('.button2-2-2-1').remove();
		            		   	ShowQuestionKids();
	            		   		ShowButton1Kids();
	            		   		ShowButton2Kids();
		            		}
						})

				//Если пользователь нажал на "Неработаю"

					//Вопрос "Где вы работаете?"

						function ShowQuestionKids() {
							let div = document.createElement('div');
							div.classList.add('question');
							div.innerHTML = '<p>Есть ли у вас дети?</p>';
							document.querySelector(".test").appendChild(div);
						}

					//Кнопки "Да" "Нет" 

						function ShowButton1Kids() {
							let div = document.createElement('div');
							div.classList.add('button1-2-2');
							div.innerHTML = 'Да';
							document.querySelector('.test').appendChild(div);
						}
						
						function ShowButton2Kids() {
							let div = document.createElement('div');
							div.classList.add('button2-2-2');
							div.innerHTML = 'Нет';
							document.querySelector('.test').appendChild(div);
						}

				//Если пользователь нажал на "Госслужащий" "Военнослужащий" "Другая сфера"

				document.querySelector('.test').addEventListener('click', function (e) {

						if (e.target.classList.contains('button1-2-1')) {
							document.querySelector('.question').remove();
	            		   	document.querySelector('.button1-2-1').remove();
	            		   	document.querySelector('.button2-2-1').remove();
	            		   	document.querySelector('.button3-2-1').remove();
	            		   	ShowQuestionKids();
	            		   	ShowButton1Kids();
	            		   	ShowButton2Kids();
	            		   	Showlgotsl5();
	            		}

	            		else if (e.target.classList.contains('button2-2-1')) {
							document.querySelector('.question').remove();
	            		   	document.querySelector('.button1-2-1').remove();
	            		   	document.querySelector('.button2-2-1').remove();
	            		   	document.querySelector('.button3-2-1').remove();
	            		   	ShowQuestionKids();
	            		   	ShowButton1Kids();
	            		   	ShowButton2Kids();
	            		   	Showlgotsl6();
	            		}

	            		else if (e.target.classList.contains('button3-2-1')) {
							document.querySelector('.question').remove();
	            		   	document.querySelector('.button1-2-1').remove();
	            		   	document.querySelector('.button2-2-1').remove();
	            		   	document.querySelector('.button3-2-1').remove();
	            		   	ShowQuestionKids();
	            		   	ShowButton1Kids();
	            		   	ShowButton2Kids();
	            		}

					})

				//Если пользователь нажал на "Да" есть ли у вас дети

					//Вопрос "У вас многодетная семья?"

						function ShowQuestionMoreKids() {
							let div = document.createElement('div');
							div.classList.add('question');
							div.innerHTML = '<p>У вас многодетная семья?</p>';
							document.querySelector(".test").appendChild(div);
						}

					//Кнопки "Да" "Нет" 

						function ShowButton1MoreKids() {
							let div = document.createElement('div');
							div.classList.add('button1-2-3');
							div.innerHTML = 'Да';
							document.querySelector('.test').appendChild(div);
						}
						
						function ShowButton2MoreKids() {
							let div = document.createElement('div');
							div.classList.add('button2-2-3');
							div.innerHTML = 'Нет';
							document.querySelector('.test').appendChild(div);
						}

					//Если пользователь нажал на "Да" "Нет"

					document.querySelector('.test').addEventListener('click', function (e) {

						if (e.target.classList.contains('button1-2-2')) {
							document.querySelector('.question').remove();
	            		   	document.querySelector('.button1-2-2').remove();
	            		   	document.querySelector('.button2-2-2').remove();
	            		   	ShowQuestionMoreKids();
	            		   	ShowButton1MoreKids();
	            		   	ShowButton2MoreKids();
	            		}

	            		else if (e.target.classList.contains('button2-2-2')) {
							document.querySelector('.question').remove();
							document.querySelector('.button1-2-2').remove();
	            		   	document.querySelector('.button2-2-2').remove();
	            		   	ShowQuestionInvalid();
            			    ShowButton1Invalid();
            			    ShowButton2Invalid();
	            		}

					})

					//При нажатии на Многодетная семья

					document.querySelector('.test').addEventListener('click', function (e) {

						if (e.target.classList.contains('button1-2-3')) {
							document.querySelector('.question').remove();
	            		   	document.querySelector('.button1-2-3').remove();
	            		   	document.querySelector('.button2-2-3').remove();
	            		   	ShowQuestionInvalid();
            			    ShowButton1Invalid();
            			    ShowButton2Invalid();
            			    Showlgotsl7();
	            		}

	            		else if (e.target.classList.contains('button2-2-3')) {
							document.querySelector('.question').remove();
							document.querySelector('.button1-2-3').remove();
	            		   	document.querySelector('.button2-2-3').remove();
	            		   	ShowQuestionInvalid();
            			    ShowButton1Invalid();
            			    ShowButton2Invalid();
	            		}

					})



















		//Подготовка блоков, если пользователь нажал на кнопку "65+"

			//Вопрос "Являетесь ли вы участником Великой Отечественной Войны"	

				function ShowQuestionWorldWar() {
					let div = document.createElement('div');
					div.classList.add('question');
					div.innerHTML = '<p>Являетесь ли вы участником Великой Отечественной Войны</p>';
					document.querySelector(".test").appendChild(div);
				}

			//Кнопки "Да", "Нет"

				function ShowButton1WorldWar() {
					let div = document.createElement('div');
					div.classList.add('button1-3');
					div.innerHTML = 'Да';
					document.querySelector('.test').appendChild(div);
				}


				function ShowButton2WorldWar() {
					let div = document.createElement('div');
					div.classList.add('button2-3');
					div.innerHTML = 'Нет';
					document.querySelector('.test').appendChild(div);
				}

			//Нажатие на кнопки

				document.querySelector('.test').addEventListener('click', function (e) {

					if (e.target.classList.contains('button1-3')) {
						document.querySelector('.question').remove();
            		   	document.querySelector('.button1-3').remove();
            		   	document.querySelector('.button2-3').remove();
            		   	ShowQuestionInvalid();
            			ShowButton1Invalid();
            			ShowButton2Invalid();
            		   	Showlgotsl4();
            		}

            		else if (e.target.classList.contains('button2-3')) {
						document.querySelector('.question').remove();
            		   	document.querySelector('.button1-3').remove();
            		   	document.querySelector('.button2-3').remove();
            		   	ShowQuestionInvalid();
            			ShowButton1Invalid();
            			ShowButton2Invalid();
            		}

            		else if (e.target.classList.contains('button3-3')) {
						document.querySelector('.question').remove();
            		   	document.querySelector('.button1-3').remove();
            		   	document.querySelector('.button2-3').remove();
            		   	ShowQuestionInvalid();
            			ShowButton1Invalid();
            			ShowButton2Invalid();
            		}

				})



				// Кнопка чат бот
				function ShowBot() {
					let div = document.createElement('div');
					div.classList.add('bot');
					div.innerHTML = 'Чат-бот';
					document.querySelector('.test').appendChild(div);
				}

















	//Льготы

		function Showlgotsl1() {
			let div = document.createElement('div');
			div.classList.add('l1');
			div.innerHTML = 'Акадимическая Стипендия';
			document.querySelector('.spisok').appendChild(div);
		}

		function Showlgotsl2() {
			let div = document.createElement('div');
			div.classList.add('l2');
			div.innerHTML = 'Выплаты по инвалидности';
			document.querySelector('.spisok').appendChild(div);
		}

		function Showlgotsl3() {
			let div = document.createElement('div');
			div.classList.add('l3');
			div.innerHTML = 'Выплаты по потере кормильца';
			document.querySelector('.spisok').appendChild(div);
		}

		function Showlgotsl4() {
			let div = document.createElement('div');
			div.classList.add('l4');
			div.innerHTML = 'Выплаты участникам ВОВ';
			document.querySelector('.spisok').appendChild(div);
		}

		function Showlgotsl5() {
			let div = document.createElement('div');
			div.classList.add('l5');
			div.innerHTML = 'Выплаты военнослужащим';
			document.querySelector('.spisok').appendChild(div);
		}

		function Showlgotsl6() {
			let div = document.createElement('div');
			div.classList.add('l6');
			div.innerHTML = 'Выплаты госслужащим';
			document.querySelector('.spisok').appendChild(div);
		}

		function Showlgotsl7() {
			let div = document.createElement('div');
			div.classList.add('l7');
			div.innerHTML = 'Выплаты многодетным семьям';
			document.querySelector('.spisok').appendChild(div);
		}

		function Showlgotsl8() {
			let div = document.createElement('div');
			div.classList.add('l8');
			div.innerHTML = 'Право выплат на детские пособия';
			document.querySelector('.spisok').appendChild(div);
		}

		function Showlgotsl9() {
			let div = document.createElement('div');
			div.classList.add('l9');
			div.innerHTML = 'Скидки на оплату жилищно-коммунальных услуг';
			document.querySelector('.spisok').appendChild(div);
		}

		function Showlgotsl10() {
			let div = document.createElement('div');
			div.classList.add('l10');
			div.innerHTML = 'Налоговые льготы';
			document.querySelector('.spisok').appendChild(div);
		}

		function Showlgotsl11() {
			let div = document.createElement('div');
			div.classList.add('l11');
			div.innerHTML = 'Юридическая помощь';
			document.querySelector('.spisok').appendChild(div);
		}

		function Showlgotsl12() {
			let div = document.createElement('div');
			div.classList.add('l12');
			div.innerHTML = 'Бесплатный проезд на общественном транспорте';
			document.querySelector('.spisok').appendChild(div);
		}

}