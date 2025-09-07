module message_board_addr::payout {

    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin;

    /// Escrow balance is held in the project deployer's account

    /// Payout to a recipient (backend must resolve GitHub username -> wallet)
    public entry fun payout_if_approved(
        project: &signer,
        recipient: address,
        approved: bool,
        amount: u64
    ) {
        if (!approved) {
            abort 1; // Not approved, stop
        };

        // Transfer AptosCoin from project to resolved wallet
        coin::transfer<aptos_coin::AptosCoin>(
            project,
            recipient,
            amount
        );
    }
}
