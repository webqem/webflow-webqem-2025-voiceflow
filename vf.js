<script async tr-color-vars="vf-background-titlebar" duration="0.5" ease="power1.out" src="https://cdn.jsdelivr.net/gh/flowtricks/scripts@v1.0.4/dark-mode-toggle.js"></script>
<script async src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

<script type="text/javascript">
(function(d, t) {
	var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
	v.onload = function() {
		const wqaibtn=`<svg id="wq-ai-btn" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" rx="10" fill="url(#paint0_linear_577_3656)"/><path d="M26.1875 17.375C26.0469 17.2812 26 17.1406 26 17C26 16.8594 26.0469 16.7656 26.1875 16.6719L29 15.5L30.125 12.7344C30.2188 12.5938 30.3594 12.5 30.5 12.5C30.6406 12.5 30.7344 12.5938 30.8281 12.7344L32 15.5L34.7656 16.6719C34.9062 16.7656 35 16.8594 35 17C35 17.1406 34.9062 17.2812 34.7656 17.375L32 18.5L30.8281 21.3125C30.7344 21.4531 30.6406 21.5 30.5 21.5C30.3594 21.5 30.2188 21.4531 30.125 21.3125L29 18.5L26.1875 17.375ZM34.7656 31.6719C34.9062 31.7656 35 31.8594 35 32C35 32.1406 34.9062 32.2812 34.7656 32.375L32 33.5L30.8281 36.3125C30.7344 36.4531 30.6406 36.5 30.5 36.5C30.3594 36.5 30.2188 36.4531 30.125 36.3125L29 33.5L26.1875 32.375C26.0469 32.2812 26 32.1406 26 32C26 31.8594 26.0469 31.7656 26.1875 31.6719L29 30.5L30.125 27.7344C30.2188 27.5938 30.3594 27.5 30.5 27.5C30.6406 27.5 30.7344 27.5938 30.8281 27.7344L32 30.5L34.7656 31.6719ZM29 24.5C29 24.7812 28.8125 25.0625 28.5781 25.1562L23.2812 27.8281L20.6562 33.125C20.5156 33.3594 20.2344 33.5 20 33.5C19.6719 33.5 19.4375 33.3594 19.2969 33.125L16.6719 27.8281L11.375 25.1562C11.1406 25.0625 11 24.7812 11 24.5C11 24.2188 11.1406 23.9375 11.375 23.8438L16.6719 21.1719L19.2969 15.9219C19.5781 15.4062 20.375 15.4062 20.6562 15.9219L23.2812 21.1719L28.5781 23.8438C28.8125 23.9375 29 24.2188 29 24.5Z" fill="white"/><defs><linearGradient id="paint0_linear_577_3656" x1="24" y1="0" x2="8.75345" y2="46.569" gradientUnits="userSpaceOnUse"><stop offset="0.125" stop-color="#FF9421"/><stop offset="0.774038" stop-color="#FF6918"/></linearGradient></defs></svg>`;
		const host = document.getElementById('vfchat');
		const getVfChatRoot = () => host?.shadowRoot || null;
		window.voiceflow.chat.load({
			verify: { projectID: '6913dac6f0fd37afee81e2be' },
			url: 'https://general-runtime.voiceflow.com',
			versionID: 'production',
			assistant: {
				stylesheet: 'data:text/css;base64,LnZmcmMtY2hhdF9fY29udGFpbmVyLWlubmVyIHsKCS52ZnJjLWhlYWRlciB7CgkJYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItLXZmLWJhY2tncm91bmQtdGl0bGViYXIpOwoJfQp9Ci52ZnJjLWZvb3Rlcl9fY29udGVudCBkaXY6aGFzKC52ZnJjLWlucHV0LWNvbnRhaW5lcikgewoJYWxpZ24taXRlbXM6Y2VudGVyOwp9Ci52ZnJjLWlucHV0LWNvbnRhaW5lciB7Cgl3aWR0aDoxMDAlOwoJQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgewoJCXdpZHRoOjUwJTsKCX0KCUBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHsKCQl3aWR0aDozMyU7Cgl9Cn0KI3ZmcmMtc2VuZC1tZXNzYWdlIHsKCXBhZGRpbmc6MDsKCWJvcmRlci1yYWRpdXM6IDA7CgliYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50Owp9Ci52ZnJjLWlucHV0LWNvbnRhaW5lciwKLnZmcmMtY2hhdC1mb2N1cy1yaW5nIHsKCWJvcmRlci1yYWRpdXM6MTJweDsJCn0KLnZmcmMtcHJvbXB0IHsKCWZsZXgtZGlyZWN0aW9uOnJvdy1yZXZlcnNlOwoJLnZmcmMtYnV0dG9uIHsKCQl3aWR0aDo1MCU7Cgl9Cn0KLmRhcmstbW9kZSB7CgkudmZyYy1oZWFkZXIgewoJCWJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstLXZmLWJhY2tncm91bmQtdGl0bGViYXIpOwoJfQkKfQ==',
				title: 'Title from code',
				description: 'Description from code',
				persistence: 'localStorage'
			},
			voice: {
				url: 'https://runtime-api.voiceflow.com'
			},
			render: {
				mode: 'embedded',
				target: document.getElementById('vfchat')
			},
			// autostart: false,
			header: {
				hideImage: true,
				title: 'This is the header title'
			},
			banner: {
				hide: true,
				title: 'Welcome!',
				description: 'How can I help you today?',
				imageUrl: 'https://yourdomain.com/banner.jpg'
			},
			avatar: {
				hide: true,
				imageUrl: 'https://yourdomain.com/avatar.png'
			},
			inputPlaceholder: 'Dive deeper with webqem ai'
		}).then(() => {
			let lastSubject = null;
			// function pushIntent(subj) {
  			// 	if (!subj || subj === lastSubject) return;
  			// 	lastSubject = subj;
			// 	window.voiceflow.chat.interact({
			// 		type: 'intent',
			// 		payload: {
			// 			intent: { name: 'Page Subject' },
			// 			entities: [window.location.pathname,subj]
			// 		}
			// 	});
			// }
			function pushEvent(subj) {
  			if (!subj || subj === lastSubject) return;
  			lastSubject = subj;
				window.voiceflow.chat.interact({
					type: 'event',
					payload: {
						event: {
							name: 'scroll_subject',
							subject: subj,
							path: window.location.pathname
						}
					}
				});
			}
			window.addEventListener('message', (event) => {
				const vfchatnode = getVfChatRoot();
				if (!vfchatnode) return;

				const send = vfchatnode.querySelector('#vfrc-send-message');
				if (!send) return;

				if (send.querySelector('#wq-ai-btn')) return; // already injected
				send.innerHTML = wqaibtn;
			}, false);
			const wqaiel = document.querySelectorAll('[data-wqai-subject]');
			const wqaiobs = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const subjectValue = entry.target.getAttribute('data-wqai-subject');
						pushEvent(`${subjectValue}`);
						// console.log(`Subject in view: ${subjectValue}`);
					}
				});
			});
			wqaiel.forEach((element) => {
				wqaiobs.observe(element);
			});
			
			/*
			const vfchatnode = document.querySelector('#vfchat').shadowRoot;
			const promptGrpDiv = vfchatnode.querySelector('.vfrc-footer__content div:has(.vfrc-input-container)');
			const vfchatconfig = { childList: true, subtree: true };
			const vfchatcallback = function(mutationsList, observer) {
				for(const mutation of mutationsList) {
					if (mutation.type === 'childList') {
						mutation.addedNodes.forEach(node => {
							// console.log('Node.', node);
							if (node.nodeType === Node.ELEMENT_NODE && node.matches('.vfrc-chat--dialog .vfrc-system-response--actions')) {
								// console.log('A specific element with class "vfrc-system-response--actions" was added!', node, promptGrpDiv);
								// vfchatnode.querySelector('.vfrc-input-container').after(vfchatnode.querySelector('.vfrc-chat--dialog .vfrc-system-response--actions'));
							}
						});
					}
				}
			};
			const vfchatobs = new MutationObserver(vfchatcallback);
			vfchatobs.observe(vfchatnode, vfchatconfig);
			*/
		});
	}
	v.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs'; v.type = 'text/javascript'; s.parentNode.insertBefore(v, s);
})(document, 'script');
</script>
