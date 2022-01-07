DEMO = hello.ts

test::
	deno test --unstable --allow-ffi test

demo::
	deno run --unstable --allow-ffi demo/$(DEMO)
