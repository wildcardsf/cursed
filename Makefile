DEMO = hello

test::
	deno test --unstable --allow-ffi test

demo::
	deno run --unstable --allow-ffi demo/$(DEMO).ts
