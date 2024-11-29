<script>
	import { browser } from '$app/environment';

	let konten = $state('');
	let cta = $state('');
	let audiens = $state('');
</script>

<svelte:head>
	<title>Strategi Threads Viral</title>
</svelte:head>

<div class="container">
	<h1>Strategi Threads Viral</h1>
	<hr />
	<div class="wadah">
		<div class="jarak-atas-bawah">
			<h2>Mencari Ide Konten</h2>
			<div>
				<label for="" class="form-label">Audiens</label>
				<input
					bind:value={audiens}
					type="text"
					class="form-control"
					placeholder="Tulis audiensmu di sini"
				/>
			</div>
			<label for="">Salin teks di bawah ini ke ChatGPT</label>
			<pre>Audiens saya adalah [{audiens}]. Buatkan table yang berisi 10 harapan, impian, kefrustasian, dan ketakutan. Kolom tablenya adalah nomor, harapan, impian, kefrustasian, ketakutan</pre>
			<p class="iklan">
				Ingin mendapatkan penghasilan dari Threads? <a
					target="_blank"
					href="https://lynk.id/zenhacker/RKeeraV">Pelajari caranya</a
				>
			</p>
		</div>
		<div class="jarak-atas-bawah">
			<h2>Percantik Konten</h2>
			<div>
				<label for="" class="form-label">Konten</label>
				<textarea
					placeholder="Isi kontennya di sini"
					name=""
					bind:value={konten}
					rows="7"
					class="form-control"
					id=""
				></textarea>
			</div>
			<div>
				<label for="" class="form-label">Call to Action</label>
				<input
					type="text"
					class="form-control"
					placeholder="Contoh: Bagaimana pendapatmu? Yuk komen di bawah"
					bind:value={cta}
				/>
			</div>
			<label for="">Salin teks di bawah ini ke ChatGPT</label>
			<pre>Isi konten:

[{konten}]

Media: Threads (bentuk utas)

Olahkan konten tersebut sehingga diawali dengan hook yang membuat penasaran/kontroversial/heboh yang intinya membuat orang tertarik untuk membaca lebih lanjut. 

Di bagian pembahasan (setelah hook dan sebelum CTA), selain teks pembahasan, jangan lupa sisipkan item-item menarik yang membuat audiens terus membaca. Mungkin bisa disisipkan dengan polling, emoticon, dan list (list stylenya harus emoticon, bukan numbered maupun bullet) 

Lalu, akhiri dengan Call to Action: [{cta}]

Sampaikan konten ini dengan gaya konspirasi</pre>
		</div>
	</div>
</div>

<style>
	.container {
		--jarak-atas-bawah: 20px;
		padding-top: var(--jarak-atas-bawah);
		padding-bottom: var(--jarak-atas-bawah);
	}

	.wadah {
		display: grid;

		gap: 20px;
	}
	@media (min-width: 650px) {
		.wadah {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	h1 {
		text-align: center;
	}
	.jarak-atas-bawah > * ~ * {
		margin-top: 15px;
	}

	pre {
		white-space: pre-wrap;
		background: beige;
		padding: 10px;
		user-select: all;
	}
	.iklan {
		font-size: 30px;
	}
</style>
