import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { WsosWk03 } from "../target/types/wsos_wk03";

describe("wsos-wk03", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.WsosWk03 as Program<WsosWk03>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
